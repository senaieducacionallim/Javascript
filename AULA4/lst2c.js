// Crie um programa que imprima 11 vezes a frase "Hello World!" utilizando uma estrutura de repetição.


// ### Exercícios com Laço `for`

// #### Exercício 1: Imprimir Números de 1 a 50
// Escreva um programa que imprima todos os números de 1 a 50.


// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }


// #### Exercício 2: Tabuada de um Número
// Escreva um programa que peça ao usuário um número e imprima a tabuada desse número de 1 a 10.


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (numero) => {
  numero = Number(numero);

  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }

  rl.close();
});


// #### Exercício 3: Soma dos Números Ímpares
// Escreva um programa que calcule a soma de todos os números ímpares de 1 a 100.


// let soma = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     soma += i;
//   }
// }
// console.log(soma);


// ### Exercícios com Laço `while`

// #### Exercício 4: Contagem Regressiva
// Escreva um programa que faça uma contagem regressiva de 10 a 1 e imprima "Feliz Ano Novo!" ao final.


// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }
// console.log("Feliz Ano Novo!");


// #### Exercício 5: Adivinhe o Número
// Escreva um programa que peça ao usuário para adivinhar um número entre 1 e 10 até que ele acerte.

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const numeroSecreto = 7;
// let chute;

// const perguntar = () => {
//   rl.question('Adivinhe o número (1 a 10): ', (resposta) => {
//     chute = Number(resposta);
//     if (chute === numeroSecreto) {
//       console.log("Parabéns! Você acertou.");
//       rl.close();
//     } else {
//       console.log("Tente novamente.");
//       perguntar();
//     }
//   });
// };

// perguntar();


// #### Exercício 6: Soma de Números Positivos
// Escreva um programa que peça ao usuário para inserir números positivos e calcule a soma desses números. O programa deve parar quando o usuário inserir um número negativo.


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let soma = 0;
// let numero;

// const perguntar = () => {
//   rl.question('Digite um número (negativo para sair): ', (resposta) => {
//     numero = Number(resposta);
//     if (numero >= 0) {
//       soma += numero;
//       perguntar();
//     } else {
//       console.log(`A soma dos números positivos é: ${soma}`);
//       rl.close();
//     }
//   });
// };

// perguntar();


// ### Exercícios com Laço `do...while`

// #### Exercício 7: Menu de Opções
// Escreva um programa que apresente um menu de opções ao usuário e continue exibindo o menu até que o usuário escolha a opção de sair.


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let opcao;

// const mostrarMenu = () => {
//   console.log("Menu de Opções:");
//   console.log("1. Opção 1");
//   console.log("2. Opção 2");
//   console.log("3. Sair");
// };

// const perguntar = () => {
//   mostrarMenu();
//   rl.question('Escolha uma opção: ', (resposta) => {
//     opcao = Number(resposta);
//     if (opcao === 3) {
//       console.log("Programa encerrado.");
//       rl.close();
//     } else {
//       console.log(`Você escolheu a opção ${opcao}.`);
//       perguntar();
//     }
//   });
// };

// perguntar();


// #### Exercício 8: Validação de Entrada
// Escreva um programa que peça ao usuário para inserir um número entre 1 e 10 e continue pedindo até que o usuário insira um número válido.


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let numero;

// do {
//   numero = readlineSync.question('Digite um número entre 1 e 10: ');
//   numero = Number(numero);
// } while (numero < 1 || numero > 10);

// console.log(`Você digitou um número válido: ${numero}`);


// Pratique esses exercícios e você estará mais preparado para lidar com laços de repetição em JavaScript! 🚀