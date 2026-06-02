const { getPool } = require("./_db");

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ ok: false });
    return;
  }

  const startedAt = Date.now();

  try {
    const pool = getPool();
    await pool.query("select 1 as ok");
    response.status(200).json({
      ok: true,
      database: "connected",
      latencyMs: Date.now() - startedAt,
      checkedAt: new Date().toISOString(),
    });
  } catch {
    response.status(500).json({
      ok: false,
      database: "unavailable",
      message: "Database unavailable",
      checkedAt: new Date().toISOString(),
    });
  }
};
