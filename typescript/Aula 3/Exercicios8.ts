import PromptSync from 'prompt-sync';

const prompt = PromptSync();
// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.


//se nao tiver a condicao usar o doWhile

// let prompt = require('prompt-sync')()
export function idadeUsuario() {
  let idade
do {
  let idade = parseInt(prompt("Digite sua idade: "))
  
} while (idade < 18);

console.log("Maior que 18 anos");

}
var idade = parseInt(prompt("Digite a sua idade:"));

while (idade < 18) {
  idade = parseInt(prompt("Digite a sua idade:"));
}

console.log("Você é maior de 18 anos!");



// ou 

