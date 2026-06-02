const {
  MAX_SUBMISSION_BYTES,
  SUBMISSION_RATE_LIMIT,
  enforceRateLimit,
  getClientInfo,
  getPool,
  readJson,
  sanitizeSubmission,
  sendMethodNotAllowed,
  sendPayloadTooLarge,
  sendServerError,
} = require("./_db");

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    sendMethodNotAllowed(response);
    return;
  }

  if (enforceRateLimit(request, response, "track-submission", SUBMISSION_RATE_LIMIT)) return;

  try {
    const body = sanitizeSubmission(await readJson(request, { maxBytes: MAX_SUBMISSION_BYTES }));
    const client = getClientInfo(request);
    await getPool().query(
      `insert into submissions (
        platform,
        ai_involvement,
        status,
        publish_copy,
        copy_length,
        has_image,
        file_name,
        file_type,
        file_size_bytes,
        file_sha256,
        ip,
        country,
        region,
        city,
        user_agent,
        language
      ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`,
      [
        body.platform,
        body.aiInvolvement,
        body.status,
        body.publishCopy,
        body.copyLength,
        body.hasImage,
        body.fileName,
        body.fileType,
        body.fileSizeBytes,
        body.fileSha256,
        client.ip,
        client.country,
        client.region,
        client.city,
        client.userAgent,
        body.language,
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
