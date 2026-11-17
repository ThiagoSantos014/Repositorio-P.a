// Exercício 5 - Números pares e ímpares
var numeros = [];
var pares = 0;
var impares = 0;

for (var i = 0; i < 10; i++) {
  numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:"));
}

for (var i = 0; i < 10; i++) {
  if (numeros[i] % 2 == 0) {
    pares++;
  } else {
    impares++;
  }
}

alert("Quantidade de pares: " + pares + "\nQuantidade de ímpares: " + impares);
