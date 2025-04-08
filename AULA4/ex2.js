// Imprimir números pares de 1 a 20:

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// Calcular o fatorial de um número fornecido pelo usuário

// const readlineSync = require("readline-sync");

// let numero = readlineSync.question("Digite um número: ");
 let numero = 5;

numero = Number(numero);

let fatorial = 1;
for (let i = 1; i <= numero; i++) {
  fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}.`);

// Tabuada de um número fornecido pelo usuário



