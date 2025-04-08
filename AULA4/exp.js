// Iterar sobre um array: 

let frutas = ["maçã", "banana", "laranja"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}


// Iterar valores de outro tema:
let carro = ["Fusca", "Gol", "Palio"];
for (let i = 0; i < carro.length; i++) {
  console.log(carro[i]);
}
// Calcular a soma de números:

let soma = 0;
for (let i = 1; i <= 10; i++) {
  soma += i;
}
console.log(soma);


// Explicação:

//     Inicialização da Variável soma: let soma = 0;
//         Inicializa a variável soma com o valor 0. Esta variável será usada para acumular a soma dos números.

//     Laço for:
//         Inicialização: let i = 1;
//             Inicializa a variável i com o valor 1. Esta variável será usada como contador no laço.
//         Condição: i <= 100;
//             O laço continua enquanto i for menor ou igual a 100.
//         Incremento: i++
//             Incrementa i em 1 a cada iteração.

//     Acumulação da Soma: soma += i;
//         Em cada iteração do laço, o valor de i é adicionado à variável soma. O operador += é uma forma abreviada de escrever soma = soma + i.

//     Impressão do Resultado: console.log(soma);
//         Após o término do laço, o valor acumulado em soma é impresso. Este valor representa a soma de todos os números de 1 a 100.

// Passo a Passo do Laço

//     Primeira Iteração: i = 1
//         soma = 0 + 1 = 1
//     Segunda Iteração: i = 2
//         soma = 1 + 2 = 3
//     Terceira Iteração: i = 3
//         soma = 3 + 3 = 6
//     ...
//     Última Iteração: i = 100
//         soma = 4950 + 100 = 5050

// Resumo

// O laço for percorre os números de 1 a 100, adicionando cada número à variável soma. No final do laço, a variável soma contém a soma de todos os números de 1 a 100, que é 5050.