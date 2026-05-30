module.exports = function handler(request, response) {
  const forwardedFor = request.headers["x-forwarded-for"] || "";
  const ip = forwardedFor.split(",")[0].trim() || request.socket?.remoteAddress || "";

  response.status(200).json({
    ip,
    country: request.headers["x-vercel-ip-country"] || "",
    region: request.headers["x-vercel-ip-country-region"] || "",
    city: request.headers["x-vercel-ip-city"] || "",
    userAgent: request.headers["user-agent"] || "",
  });
};
