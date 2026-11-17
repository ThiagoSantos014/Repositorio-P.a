// Exercício 2 - Soma dos elementos
var numeros = [];
var soma = 0;

for (var i = 0; i < 10; i++) {
  numeros[i] = Number(prompt("Digite o " + (i + 1) + "º número:"));
  soma += numeros[i];
}

alert("A soma dos elementos é: " + soma);
