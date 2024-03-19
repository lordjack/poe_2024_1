/* 
Q05 - Encontre o maior valor de um vetor utilizando o Reduce
*/

let numeros = [1, 5, 8, 10, 15, 6, 7, 4];

//opção 01
let maior = numeros.reduce((maior, numero) => {
  if (numero > maior) {
    return numero;
  } else {
    return maior;
  }
});

console.log(maior);

//opção 02
let maior2 = numeros.reduce((maior, numero) =>
  numero > maior ? numero : maior
);
console.log(maior2);
