const { Pool } = require("pg");

let pool;

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

async function readJson(request) {
  if (request.body && typeof request.body === "object") return request.body;

  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  if (chunks.length === 0) return {};

  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return {};
  }
}

function sendMethodNotAllowed(response) {
  response.setHeader("Allow", "POST");
  response.status(405).json({ ok: false });
}

module.exports = {
  getClientInfo,
  getPool,
  readJson,
  sendMethodNotAllowed,
};
