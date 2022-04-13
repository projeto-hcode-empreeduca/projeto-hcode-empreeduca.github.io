"use strict";
// A partir de 2015 (ES6 ou ES2015)
// let, const
// var deixou de ser utilizado
// let e const -> Não existe Hoisting

// let -> Pode mudar o valor da variável
// const -> Não poder mudar o valor da variável

let name = "Djalma";
const companyName = "Hcode Treinamentos";

name = "Djalma da Hcode";

// console.log(`O nome da minha empresa é ${name} no projeto Empreeduca`);

// var vs let
// Escopo - Limites do código onde a variável pode ser encontrada e utilizada
// Escopo de bloco (if / else) e Escopo de função (function() {})
// var -> Excede o escopo de bloco
// let -> Não excede o escopo de bloco

function sum(num1, num2) {

    // var result = num1 + num2;
    let result = num1 + num2;

    if (result < 10) {

        // var result = (num1 + num2) * 3;
        result = (num1 + num2) * 3;

        console.log(`Resultado dentro do if: ${result}`);

    }

    console.log(`Resultado fora do if: ${result}`);

    return result;

}

// print, printf, System.writeLine, System.outPrint, console.log, escreva
console.log(sum(8, 1));
// sum(5, 10);