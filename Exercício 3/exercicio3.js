// Exercício 3 - Média dos valores
var notas = [];
var soma = 0;

for (var i = 0; i < 8; i++) {
  notas[i] = Number(prompt("Digite a " + (i + 1) + "ª nota:"));
  soma += notas[i];
}

var media = soma / 8;
alert("A média das notas é: " + media);
