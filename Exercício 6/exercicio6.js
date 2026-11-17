// Exercício 6 - Pesquisa de um número
var numeros = [];
var encontrado = false;

for (var i = 0; i < 10; i++) {
  numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:"));
}

var pesquisa = parseInt(prompt("Digite o número que deseja pesquisar:"));

for (var i = 0; i < 10; i++) {
  if (numeros[i] == pesquisa) {
    encontrado = true;
  }
}

if (encontrado == true) {
  alert("Número encontrado!");
} else {
  alert("Número não encontrado.");
}
