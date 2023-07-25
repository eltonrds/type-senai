// Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let prompt = require('prompt-sync')()

var numero = parseInt(prompt("Digite o numero: "));

while (numero >= 0) {
  console.log(numero);
  numero--;
}

console.log("Contagem regressiva concluída!");



// ou 


// const prompt = require('prompt-sync')()

let numero = parseInt(prompt("Digite o numero: "));

while (numero >= 0) {
  console.log(numero);
  numero--;
}

console.log("Contagem regressiva concluída!");