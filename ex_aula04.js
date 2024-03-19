/*
Q04 - Calcule a soma de todos os elementos de um vetor
*/

let numeros = [1, 5, 3, 4, 6];

let soma = numeros.reduce(
    (acumulador, numero) => acumulador + numero
    );
console.log(soma);


let subtracao = numeros.reduce(
    (acumulador, numero) => acumulador - numero
    );
console.log(subtracao);