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
        body.platform || "",
        body.aiInvolvement || "",
        body.status || "",
        body.publishCopy || "",
        Number(body.copyLength || 0),
        Boolean(body.hasImage),
        body.fileName || "",
        body.fileType || "",
        Number(body.fileSizeBytes || 0),
        body.fileSha256 || "",
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
