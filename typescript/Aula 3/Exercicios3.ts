import PromptSync from 'prompt-sync';

const prompt = PromptSync();
// Faça um programa que imprima os números ímpares de 0 a 50;

// let prompt = require('prompt-sync')()
export function numeroImpar() {
    for (let contador = 1; contador < 50; contador+=2) {
    console.log(contador);
}
}
