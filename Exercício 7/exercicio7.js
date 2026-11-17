// Exercício 7 - Vetor em ordem inversa
var numeros = [];
var resultado = "Números na ordem inversa:\n";

for (var i = 0; i < 10; i++) {
  numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:"));
}

for (var i = 9; i >= 0; i--) {
  resultado += numeros[i] + "\n";
}

alert(resultado);
