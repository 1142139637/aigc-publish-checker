const {
  TRACKING_RATE_LIMIT,
  enforceRateLimit,
  getClientInfo,
  getPool,
  readJson,
  sanitizeString,
  sendMethodNotAllowed,
  sendPayloadTooLarge,
  sendServerError,
} = require("./_db");

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    sendMethodNotAllowed(response);
    return;
  }

  if (enforceRateLimit(request, response, "track-visit", TRACKING_RATE_LIMIT)) return;

  try {
    const body = await readJson(request);
    const client = getClientInfo(request);
    await getPool().query(
      `insert into visits (ip, country, region, city, user_agent, language, page)
       values ($1, $2, $3, $4, $5, $6, $7)`,
      [
        client.ip,
        client.country,
        client.region,
        client.city,
        client.userAgent,
        sanitizeString(body.language, 20),
        sanitizeString(body.page, 300),
      ],
    );
    response.status(200).json({ ok: true });
  } catch (error) {
    if (error.statusCode === 413) {
      sendPayloadTooLarge(response);
      return;
    }
    sendServerError(response);
  }
};
