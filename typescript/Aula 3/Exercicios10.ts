// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let prompt = require('prompt-sync')()

var numero = parseInt(prompt("Digite um número:"));

while (numero !== 0) {
  numero = parseInt(prompt("Digite um número:"));
}

console.log("Programa encerrado.");
