export async function GET() {
  return Response.json({
    ok: true,
    layer: "server",
    message: "Запрос прошёл от браузера до серверного маршрута",
  });
}
