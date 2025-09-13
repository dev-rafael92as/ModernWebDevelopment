export function calculaImc(height: number, weight: number) {
  return fetch("http://localhost:3000/imc/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ height, weight })
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erro ao calcular IMC");
      }
    });
}