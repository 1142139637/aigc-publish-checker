const { Pool } = require("pg");

let pool;
const rateBuckets = new Map();
const MAX_JSON_BYTES = 32 * 1024;
const MAX_SUBMISSION_BYTES = 16 * 1024;
const MAX_COPY_LENGTH = 5000;
const MAX_STRING_LENGTH = 500;
const TRACKING_RATE_LIMIT = { limit: 60, windowMs: 60 * 1000 };
const SUBMISSION_RATE_LIMIT = { limit: 12, windowMs: 60 * 1000 };
const ADMIN_RATE_LIMIT = { limit: 8, windowMs: 10 * 60 * 1000 };

function getPool() {
  if (!process.env.SUPABASE_DATABASE_URL) {
    throw new Error("SUPABASE_DATABASE_URL is not configured");
  }

  if (!pool) {
    pool = new Pool({
      connectionString: process.env.SUPABASE_DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 3,
    });
  }

  return pool;
}

function getClientInfo(request) {
  const forwardedFor = request.headers["x-forwarded-for"] || "";
  return {
    ip: forwardedFor.split(",")[0].trim() || request.socket?.remoteAddress || "",
    country: request.headers["x-vercel-ip-country"] || "",
    region: request.headers["x-vercel-ip-country-region"] || "",
    city: request.headers["x-vercel-ip-city"] || "",
    userAgent: request.headers["user-agent"] || "",
  };
}

async function readJson(request, options = {}) {
  const maxBytes = options.maxBytes || MAX_JSON_BYTES;
  const contentLength = Number(request.headers["content-length"] || 0);
  if (contentLength > maxBytes) {
    const error = new Error("Request body is too large");
    error.statusCode = 413;
    throw error;
  }

  if (request.body && typeof request.body === "object") return request.body;

  const chunks = [];
  let totalBytes = 0;
  for await (const chunk of request) {
    totalBytes += chunk.length;
    if (totalBytes > maxBytes) {
      const error = new Error("Request body is too large");
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }
  if (chunks.length === 0) return {};

  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return {};
  }
}

function sanitizeString(value, maxLength = MAX_STRING_LENGTH) {
  return String(value || "").trim().slice(0, maxLength);
}

function sanitizeProperties(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value)
      .slice(0, 30)
      .map(([key, entry]) => [
        sanitizeString(key, 80),
        typeof entry === "boolean" || typeof entry === "number"
          ? entry
          : sanitizeString(entry, MAX_STRING_LENGTH),
      ]),
  );
}

function sanitizeSubmission(body) {
  return {
    platform: sanitizeString(body.platform),
    aiInvolvement: sanitizeString(body.aiInvolvement),
    status: sanitizeString(body.status),
    publishCopy: sanitizeString(body.publishCopy, MAX_COPY_LENGTH),
    copyLength: Math.min(MAX_COPY_LENGTH, Math.max(0, Number(body.copyLength || 0))),
    hasImage: Boolean(body.hasImage),
    fileName: sanitizeString(body.fileName),
    fileType: sanitizeString(body.fileType, 120),
    fileSizeBytes: Math.max(0, Number(body.fileSizeBytes || 0)),
    fileSha256: sanitizeString(body.fileSha256, 128),
    language: sanitizeString(body.language, 20),
  };
}

function checkRateLimit(key, limit, windowMs) {
  const now = Date.now();
  const bucket = rateBuckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  bucket.count += 1;
  return bucket.count <= limit;
}

function pruneRateBuckets() {
  const now = Date.now();
  for (const [key, bucket] of rateBuckets.entries()) {
    if (bucket.resetAt <= now) rateBuckets.delete(key);
  }
}

function enforceRateLimit(request, response, scope, options) {
  pruneRateBuckets();
  const client = getClientInfo(request);
  const key = `${scope}:${client.ip || "unknown"}`;
  if (checkRateLimit(key, options.limit, options.windowMs)) return false;

  response.status(429).json({ ok: false, message: "Too many requests" });
  return true;
}

function isAdminPassword(password) {
  return Boolean(process.env.ADMIN_PASSWORD) && String(password || "") === process.env.ADMIN_PASSWORD;
}

function sendServerError(response) {
  response.status(500).json({ ok: false, message: "Server error" });
}

function sendPayloadTooLarge(response) {
  response.status(413).json({ ok: false, message: "Request body is too large" });
}

function sendMethodNotAllowed(response) {
  response.setHeader("Allow", "POST");
  response.status(405).json({ ok: false });
}

module.exports = {
  ADMIN_RATE_LIMIT,
  MAX_SUBMISSION_BYTES,
  SUBMISSION_RATE_LIMIT,
  TRACKING_RATE_LIMIT,
  enforceRateLimit,
  getClientInfo,
  getPool,
  isAdminPassword,
  readJson,
  sanitizeProperties,
  sanitizeString,
  sanitizeSubmission,
  sendMethodNotAllowed,
  sendPayloadTooLarge,
  sendServerError,
};
