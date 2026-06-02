const { getClientInfo, getPool, readJson, sendMethodNotAllowed } = require("./_db");

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    sendMethodNotAllowed(response);
    return;
  }

  try {
    const body = await readJson(request);
    const client = getClientInfo(request);
    await getPool().query(
      `insert into events (event_name, properties, ip, country, region, city, user_agent, language)
       values ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        body.eventName || "unknown",
        body.properties || {},
        client.ip,
        client.country,
        client.region,
        client.city,
        client.userAgent,
        body.language || "",
      ],
    );
    response.status(200).json({ ok: true });
  } catch (error) {
    response.status(500).json({ ok: false, message: error.message });
  }
};
