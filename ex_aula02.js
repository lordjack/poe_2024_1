/*
Q01 - Multiplique cada elemento de um vetor

*/

//opção 01
let numeros = [5, 3, 8, 4, 7];

let result = numeros.map((item) => item * 2);

result.map((item) => console.log(item));

//opção 02
let result2 = [];
for (let i = 0; i < numeros.length; i++) {
  result2.push(numeros[i] * 2);
  console.log();
}

for (let i in result2) {
  console.log(result2[i]);
}
