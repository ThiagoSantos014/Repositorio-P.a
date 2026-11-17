// Exercício 9 - Comparação entre dois vetores
var vetorA = [];
var vetorB = [];
var vetorC = [];
var resultado = "Vetor A | Vetor B | Vetor C\n";

for (var i = 0; i < 5; i++) {
  vetorA[i] = Number(prompt("Digite o " + (i + 1) + "º número do vetor A:"));
}

for (var i = 0; i < 5; i++) {
  vetorB[i] = Number(prompt("Digite o " + (i + 1) + "º número do vetor B:"));
}

for (var i = 0; i < 5; i++) {
  vetorC[i] = vetorA[i] + vetorB[i];
  resultado += vetorA[i] + "       | " + vetorB[i] + "       | " + vetorC[i] + "\n";
}

alert(resultado);
