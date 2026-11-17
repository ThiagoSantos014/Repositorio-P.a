var numeros = [];
var auxiliar;

function executar() {
  for (var i = 0; i < 10; i++) {
    numeros[i] = Number(document.getElementById("n" + i).value);
  }

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9 - i; j++) {
      if (numeros[j] > numeros[j + 1]) {
        auxiliar = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = auxiliar;
      }
    }
  }

  document.write("Números em ordem crescente:<br>");
  for (var i = 0; i < 10; i++) {
    document.write(numeros[i] + "<br>");
  }
}