var numeros = [];
var maior;
var menor;

function executar() {
  for (var i = 0; i < 10; i++) {
    numeros[i] = Number(document.getElementById("n" + i).value);
  }

  maior = numeros[0];
  menor = numeros[0];

  for (var i = 1; i < 10; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }

  document.write("Maior número: " + maior + "<br>");
  document.write("Menor número: " + menor);
}