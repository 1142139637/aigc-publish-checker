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
      `insert into visits (ip, country, region, city, user_agent, language, page)
       values ($1, $2, $3, $4, $5, $6, $7)`,
      [client.ip, client.country, client.region, client.city, client.userAgent, body.language || "", body.page || ""],
    );
    response.status(200).json({ ok: true });
  } catch (error) {
    response.status(500).json({ ok: false, message: error.message });
  }
};
