"use strict";
// Strict mode - Previnir que usemos uma variável não declarada
// Sempre use o strict mode

// Antes de 2015
// var
// Hoisting - Içar uma variável

name = "Hcode";

var name;

// Concatenação - Unir duas strings ou uma string e uma variável
// Antes de 2015 - "" + variable
console.log("O nome da minha empresa é " + name + " no projeto Empreeduca");

// A partir de 2015 - Template string -> ``
console.log(`O nome da minha empresa é ${name} no projeto Empreeduca`);