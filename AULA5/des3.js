// Calcular média de notas com base em duas notas, sendo a primeira  6 e a segunda 10 e mais 4 para trabalhos


// Lava rápido do João - 3 serviços
// 1 - Lavagem simples - R$ 20,00
// 2 - Lavagem completa - R$ 30,00 
// 3 - Enceramento - R$ 50,00
// Apresentar o valor total da compra ou serviço escolhido e valor final e o nome do cliente e placa do veiculo

















let nota1 = parseFloat(prompt("Digite a nota 1:"));
let nota2 = parseFloat(prompt("Digite a nota 2:"));
let trabalho = parseFloat(prompt("Digite a nota do trabalho:"));

let media = ((nota1 + nota2 + trabalho)) / 2;
alert(`A média é: ${media}`);

