const {
  ADMIN_RATE_LIMIT,
  enforceRateLimit,
  getPool,
  isAdminPassword,
  readJson,
  sendMethodNotAllowed,
  sendServerError,
} = require("./_db");

function getRange(value) {
  const key = ["today", "7d", "30d", "all"].includes(value) ? value : "7d";
  const now = new Date();

  if (key === "all") return { key, start: null };

  if (key === "today") {
    const start = new Date(now);
    start.setHours(0, 0, 0, 0);
    return { key, start: start.toISOString() };
  }

  const days = key === "30d" ? 30 : 7;
  const start = new Date(now);
  start.setDate(start.getDate() - (days - 1));
  start.setHours(0, 0, 0, 0);
  return { key, start: start.toISOString() };
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    sendMethodNotAllowed(response);
    return;
  }

  if (enforceRateLimit(request, response, "admin-stats", ADMIN_RATE_LIMIT)) return;

  try {
    const body = await readJson(request);
    if (!isAdminPassword(body.password)) {
      response.status(401).json({ ok: false });
      return;
    }

    const range = getRange(body.range);
    const filterSql = range.start ? "created_at >= $1" : "true";
    const params = range.start ? [range.start] : [];
    const pool = getPool();
    const [
      overview,
      funnel,
      content,
      traffic,
      platformRows,
      involvementRows,
      ipRows,
      countryRows,
      languageRows,
      statusRows,
      dailyRows,
      recentSubmissions,
      highRiskSubmissions,
      recentEvents,
    ] = await Promise.all([
      pool.query(`
        select
          (select count(*)::int from visits where ${filterSql}) as visits,
          (select count(*)::int from submissions where ${filterSql}) as submissions,
          (select count(*)::int from events where event_name = 'report_generated' and ${filterSql}) as reports,
          (select count(distinct ip)::int from visits where ip <> '' and ${filterSql}) as unique_ips
      `, params),
      pool.query(`
        select
          count(*) filter (where event_name = 'check_started')::int as started,
          count(*) filter (where event_name = 'report_generated')::int as reports,
          count(*) filter (where event_name = 'report_downloaded')::int as markdown,
          count(*) filter (where event_name = 'report_pdf_downloaded')::int as pdf
        from events
        where ${filterSql}
      `, params),
      pool.query(`
        select
          coalesce(round(avg(copy_length)), 0)::int as avg_copy_length,
          coalesce(round(100.0 * count(*) filter (where has_image = true) / nullif(count(*), 0)), 0)::int as image_rate,
          coalesce(round(100.0 * count(*) filter (where status = 'high_risk') / nullif(count(*), 0)), 0)::int as risk_rate,
          0::int as client_rate
        from submissions
        where ${filterSql}
      `, params),
      pool.query(`
        select
          count(*) filter (where ip <> '')::int as ip_visits,
          count(distinct country) filter (where country <> '')::int as country_count,
          count(distinct city) filter (where city <> '')::int as city_count
        from visits
        where ${filterSql}
      `, params),
      pool.query(`
        select properties->>'platform' as key, count(*)::int as count
        from events
        where event_name = 'report_generated' and properties->>'platform' is not null and ${filterSql}
        group by properties->>'platform'
        order by count desc
        limit 20
      `, params),
      pool.query(`
        select properties->>'aiInvolvement' as key, count(*)::int as count
        from events
        where event_name = 'report_generated' and properties->>'aiInvolvement' is not null and ${filterSql}
        group by properties->>'aiInvolvement'
        order by count desc
        limit 20
      `, params),
      pool.query(`
        select ip, country, region, city, count(*)::int as count, max(created_at) as last_seen
        from visits
        where ip <> '' and ${filterSql}
        group by ip, country, region, city
        order by last_seen desc
        limit 30
      `, params),
      pool.query(`
        select coalesce(nullif(country, ''), 'unknown') as country, count(*)::int as count
        from visits
        where ${filterSql}
        group by coalesce(nullif(country, ''), 'unknown')
        order by count desc
        limit 20
      `, params),
      pool.query(`
        select coalesce(nullif(language, ''), 'unknown') as language, count(*)::int as count
        from visits
        where ${filterSql}
        group by coalesce(nullif(language, ''), 'unknown')
        order by count desc
        limit 20
      `, params),
      pool.query(`
        select coalesce(nullif(status, ''), 'unknown') as key, count(*)::int as count
        from submissions
        where ${filterSql}
        group by coalesce(nullif(status, ''), 'unknown')
        order by count desc
        limit 20
      `, params),
      pool.query(`
        with days as (
          select generate_series(current_date - interval '13 days', current_date, interval '1 day')::date as day
        ),
        visit_counts as (
          select created_at::date as day, count(*)::int as visits
          from visits
          where created_at >= current_date - interval '13 days' and ${filterSql}
          group by created_at::date
        ),
        report_counts as (
          select created_at::date as day, count(*)::int as reports
          from events
          where event_name = 'report_generated' and created_at >= current_date - interval '13 days' and ${filterSql}
          group by created_at::date
        ),
        submission_counts as (
          select created_at::date as day, count(*)::int as submissions
          from submissions
          where created_at >= current_date - interval '13 days' and ${filterSql}
          group by created_at::date
        )
        select
          to_char(days.day, 'YYYY-MM-DD') as day,
          coalesce(visit_counts.visits, 0)::int as visits,
          coalesce(report_counts.reports, 0)::int as reports,
          coalesce(submission_counts.submissions, 0)::int as submissions
        from days
        left join visit_counts using (day)
        left join report_counts using (day)
        left join submission_counts using (day)
        order by days.day
      `, params),
      pool.query(`
        select platform, ai_involvement, status, publish_copy, copy_length, has_image, country, city, created_at
        from submissions
        where ${filterSql}
        order by created_at desc
        limit 20
      `, params),
      pool.query(`
        select platform, ai_involvement, status, publish_copy, copy_length, has_image, country, city, created_at
        from submissions
        where status = 'high_risk' and ${filterSql}
        order by created_at desc
        limit 30
      `, params),
      pool.query(`
        select event_name, properties, ip, country, city, created_at
        from events
        where ${filterSql}
        order by created_at desc
        limit 30
      `, params),
    ]);

    response.status(200).json({
      ok: true,
      range: range.key,
      overview: overview.rows[0],
      funnel: funnel.rows[0],
      content: content.rows[0],
      traffic: traffic.rows[0],
      platformRows: platformRows.rows,
      involvementRows: involvementRows.rows,
      ipRows: ipRows.rows,
      countryRows: countryRows.rows,
      languageRows: languageRows.rows,
      statusRows: statusRows.rows,
      dailyRows: dailyRows.rows,
      recentSubmissions: recentSubmissions.rows,
      highRiskSubmissions: highRiskSubmissions.rows,
      recentEvents: recentEvents.rows,
    });
  } catch {
    sendServerError(response);
  }
};
