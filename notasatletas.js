let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMediaAtletas(listaAtletas) {

  for (let i = 0; i < listaAtletas.length; i++) {

    let atleta = listaAtletas[i];

    // Ordena as notas (crescente)
    let notasOrdenadas = atleta.notas.slice().sort((a, b) => a - b);

    // Remove a menor e a maior nota
    let notasValidas = notasOrdenadas.slice(1, 4);

    // Soma das notas válidas
    let soma = 0;
    notasValidas.forEach(nota => {
      soma += nota;
    });

    // Cálculo da média
    let media = soma / notasValidas.length;

    // Exibição
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasOrdenadas}`);
    console.log(`Média Válida: ${media}\n`);
  }

}

// Executa a função
calcularMediaAtletas(atletas);