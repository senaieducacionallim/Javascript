var languages: Array<string> = [];
languages.push("TypeScript");
languages.push("");

var mensagemForaDoIf = "mensagem fora do if";
if (true) {
  var mensagemDentroDoIf = "mensagem dentro do if";
  console.log(mensagemDentroDoIf);
}
console.log(mensagemForaDoIf);
console.log(mensagemDentroDoIf);