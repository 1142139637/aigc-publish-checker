const { getPool, readJson, sendMethodNotAllowed } = require("./_db");

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    sendMethodNotAllowed(response);
    return;
  }

  try {
    const body = await readJson(request);
    if (!process.env.ADMIN_PASSWORD || body.password !== process.env.ADMIN_PASSWORD) {
      response.status(401).json({ ok: false });
      return;
    }

    const pool = getPool();
    const [overview, content, traffic, platformRows, involvementRows, ipRows, recentSubmissions, recentEvents] = await Promise.all([
      pool.query(`
        select
          (select count(*)::int from visits) as visits,
          (select count(*)::int from submissions) as submissions,
          (select count(*)::int from events where event_name = 'report_generated') as reports,
          (select count(distinct ip)::int from visits where ip <> '') as unique_ips
      `),
      pool.query(`
        select
          coalesce(round(avg(copy_length)), 0)::int as avg_copy_length,
          coalesce(round(100.0 * count(*) filter (where has_image = true) / nullif(count(*), 0)), 0)::int as image_rate,
          coalesce(round(100.0 * count(*) filter (where status = 'high_risk') / nullif(count(*), 0)), 0)::int as risk_rate,
          0::int as client_rate
        from submissions
      `),
      pool.query(`
        select
          count(*) filter (where ip <> '')::int as ip_visits,
          count(distinct country) filter (where country <> '')::int as country_count,
          count(distinct city) filter (where city <> '')::int as city_count
        from visits
      `),
      pool.query(`
        select properties->>'platform' as key, count(*)::int as count
        from events
        where event_name = 'report_generated' and properties->>'platform' is not null
        group by properties->>'platform'
        order by count desc
        limit 20
      `),
      pool.query(`
        select properties->>'aiInvolvement' as key, count(*)::int as count
        from events
        where event_name = 'report_generated' and properties->>'aiInvolvement' is not null
        group by properties->>'aiInvolvement'
        order by count desc
        limit 20
      `),
      pool.query(`
        select ip, country, region, city, count(*)::int as count, max(created_at) as last_seen
        from visits
        where ip <> ''
        group by ip, country, region, city
        order by last_seen desc
        limit 30
      `),
      pool.query(`
        select platform, ai_involvement, status, publish_copy, copy_length, has_image, country, city, created_at
        from submissions
        order by created_at desc
        limit 20
      `),
      pool.query(`
        select event_name, properties, ip, country, city, created_at
        from events
        order by created_at desc
        limit 30
      `),
    ]);

    response.status(200).json({
      ok: true,
      overview: overview.rows[0],
      content: content.rows[0],
      traffic: traffic.rows[0],
      platformRows: platformRows.rows,
      involvementRows: involvementRows.rows,
      ipRows: ipRows.rows,
      recentSubmissions: recentSubmissions.rows,
      recentEvents: recentEvents.rows,
    });
  } catch (error) {
    response.status(500).json({ ok: false, message: error.message });
  }
};
