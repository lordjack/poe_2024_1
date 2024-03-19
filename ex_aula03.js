let numeros = [1, 2, 3, 5, 7, 8, 10, 11, 13];

let pares = numeros.filter((item) => item % 2 === 0);

let inpares = numeros.filter((item) => item % 2 !== 0);

console.log("Pares")
pares.map((i) => console.log(i));

console.log("InPares")
inpares.map((i) => console.log(i));
