import PromptSync from 'prompt-sync';

const prompt = PromptSync();
// Imprimir os primeiros 10 números da sequência de Fibonacci.
// 0 1 1 2 3 5 8 13 

// let prompt = require('prompt-sync')()
export function fibonacci() {
  
  function fibonacci(n) {
    var fibonacciArray = [0, 1];
  
    for (var i = 2; i < n; i++) {
      var nextNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(nextNumber);
    }
  
    return fibonacciArray;
  }
  
  var fibonacciSequence = fibonacci(10);
  console.log(fibonacciSequence);
}


//  ou


// let numAnterior = 0;
// let numAtual = 1

// console.log(numAnterior);
// console.log(numAtual);
// for (let contador = 0; contador < 8; contador++) {
  
//   let resultado = numAnterior + numAtual;
//   console.log(resultado);

//   numAnterior = numAtual;
//   numAtual = resultado;

// }

// ou 


// let numAnterior = 0;
// let numAtual = 1

// console.log(numAnterior);
// console.log(numAtual);
// for (let contador = 0; contador < 8; contador++) {
 
//   let proximoNumero = numAnterior + numAtual;
//   console.log(resultado);

//   numAnterior = numAtual;
//   numAtual = proximoNumero;

// }