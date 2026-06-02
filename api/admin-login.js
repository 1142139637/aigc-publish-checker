const {
  ADMIN_RATE_LIMIT,
  enforceRateLimit,
  isAdminPassword,
  readJson,
  sendMethodNotAllowed,
  sendPayloadTooLarge,
  sendServerError,
} = require("./_db");

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    sendMethodNotAllowed(response);
    return;
  }

  if (enforceRateLimit(request, response, "admin-login", ADMIN_RATE_LIMIT)) return;

  try {
    const body = await readJson(request);
    const providedPassword = body.password || "";

    response.status(200).json({
      ok: isAdminPassword(providedPassword),
    });
  } catch (error) {
    if (error.statusCode === 413) {
      sendPayloadTooLarge(response);
      return;
    }
    sendServerError(response);
  }
};
