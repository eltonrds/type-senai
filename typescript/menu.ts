import promptSync from "prompt-sync"
import { numeroLoop } from "../typescript/Aula 3/Exercicios1";
import { numeroPar } from "../typescript/Aula 3/Exercicios2";
import { numeroImpar } from "../typescript/Aula 3/Exercicios3";
import { fibonacci } from "../typescript/Aula 3/Exercicios5";
import { idadeUsuario } from "../typescript/Aula 3/Exercicios8";

const prompt = promptSync();

let exercicios;
let continuar;

do {
    exercicios = parseInt(prompt("Digite um numero que representa um exercicios de 1 a 5: "))

    switch (exercicios) {
        case 1:
            numeroLoop()
            break;

        case 2:
            numeroPar()
            break;

        case 3:
            numeroImpar()
            break;

        case 4:
            fibonacci()
            break;

        case 5:
            idadeUsuario()
            break;

        default:
            console.log("Digite um numero que representa um exercicios de 1 a 4:");
            break;
    }
    continuar = prompt("desejo continuar ver outros exerciciso? digite s ou n: ").toLocaleLowerCase()
} while (continuar === "s");

function HelloWorld(frase) {
    console.log(frase);
}