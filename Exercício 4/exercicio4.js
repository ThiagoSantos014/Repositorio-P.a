// Exercício 4 - Maior e menor valor
var numeros = [];

for (var i = 0; i < 10; i++) {
  numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:"));
}

var maior = numeros[0];
var menor = numeros[0];

for (var i = 1; i < 10; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }

  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

alert("Maior número: " + maior + "\nMenor número: " + menor);
