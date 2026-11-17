// Desafio adicional - Números em ordem crescente
var numeros = [];

for (var i = 0; i < 10; i++) {
  numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:"));
}

for (var i = 0; i < 9; i++) {
  for (var j = 0; j < 9 - i; j++) {
    if (numeros[j] > numeros[j + 1]) {
      var troca = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = troca;
    }
  }
}

var resultado = "Números em ordem crescente:\n";

for (var i = 0; i < 10; i++) {
  resultado += numeros[i] + "\n";
}

alert(resultado);
