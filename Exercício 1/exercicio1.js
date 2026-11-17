// Exercício 1 - Cadastro de números
var numeros = [];
var resultado = "Números digitados:\n";

for (var i = 0; i < 10; i++) {
  numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:"));
}

for (var i = 0; i < 10; i++) {
  resultado += numeros[i] + "\n";
}

alert(resultado);
