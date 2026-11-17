// Exercício 8 - Positivos, negativos e zeros
var numeros = [];
var positivos = 0;
var negativos = 0;
var zeros = 0;

for (var i = 0; i < 10; i++) {
  numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:"));
}

for (var i = 0; i < 10; i++) {
  if (numeros[i] > 0) {
    positivos++;
  } else if (numeros[i] < 0) {
    negativos++;
  } else {
    zeros++;
  }
}

alert("Positivos: " + positivos + "\nNegativos: " + negativos + "\nZeros: " + zeros);
