test("GET to /api/v1/status should return 200!", async () => {
  // async para o teste esperar a resposta da requisição
  const response = await fetch("http://localhost:3000/api/v1/status"); // faz a requesição para o endpoint de status
  expect(response.status).toBe(200);
});
