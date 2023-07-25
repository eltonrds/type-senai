// Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while. 
// 1 + 2 + 3 + 4 ... 100
// 1+2= 3   3+3=6  6+4=10 ...
// resultado = resultado + 3
// pode ser usado uma variavel contador

let prompt = require('prompt-sync')()

var numero = 1;
var soma = 0;

while (numero <= 100) {
  soma += numero; numero++;
}

console.log("A soma dos números de 1 a 100 é: " + soma);




//    ou 



let resultado = 0
let contador = 1;

while (contador <= 100) {
  resultado = resultado + contador;
  contador++;

  console.log(resultado);
}



