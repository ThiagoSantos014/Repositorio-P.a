// Exercício 10 - Controle de notas de uma turma
var notas = [];
var soma = 0;
var aprovados = 0;
var reprovados = 0;

for (var i = 0; i < 10; i++) {
  notas[i] = Number(prompt("Digite a nota do " + (i + 1) + "º aluno:"));
  soma += notas[i];

  if (notas[i] >= 6) {
    aprovados++;
  } else {
    reprovados++;
  }
}

var media = soma / 10;
var resultado = "Média da turma: " + media;
resultado += "\nAprovados: " + aprovados;
resultado += "\nReprovados: " + reprovados;
resultado += "\nNotas dos alunos:\n";

for (var i = 0; i < 10; i++) {
  resultado += notas[i] + "\n";
}

alert(resultado);
