// Soma de valores
let a = parseFloat(prompt("Digite o número 1:"));
let b = parseFloat(prompt("Digite o número 2:"));

//Resultado dos valores da soma
alert(`A soma é: ${(a + b)}`);



// Mercadinho

let produtos = [];
let quantidade = parseInt(prompt("Quantos produtos você deseja inserir?"));
document.write("<h1>Mercadinho</h1>");
document.write("<ul>");
for (let i = 0; i < quantidade; i++) {
  let produto = prompt(`Digite o produto ${i + 1}:`);
  produtos.push(produto);
  document.write(`<li>${produto}</li>`);
}
document.write("</ul>");

// Calcular média de notas com base em duas notas, sendo a primeira com peso 6 e a segunda com peso 10 e mais um peso 4 para trabalhos

let nota1 = parseFloat(prompt("Digite a nota 1:"));
let nota2 = parseFloat(prompt("Digite a nota 2:"));
let trabalho = parseFloat(prompt("Digite a nota do trabalho:"));

let media = ((nota1 + nota2 + trabalho)) / 2;
alert(`A média é: ${media}`);
