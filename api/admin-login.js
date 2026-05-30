module.exports = function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ ok: false });
    return;
  }

  const expectedPassword = process.env.ADMIN_PASSWORD || "";
  const providedPassword = request.body?.password || "";

  response.status(200).json({
    ok: Boolean(expectedPassword) && providedPassword === expectedPassword,
  });
};
