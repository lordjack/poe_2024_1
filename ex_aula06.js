/*
6. Dado um vetor de objetos que represetam produtos com 
    preço e quantida, calcule o total de um carrinho 
    de compra. Use a função Map e Reduce
*/

let nome = prompt("Informe um nome")

let compras = [
  { produto: "Whey Protein", preco: 99.9, quantidade: 3 },
  { produto: "Tesoura", preco: 6.5, quantidade: 2 },
  { produto: "Esmalte", preco: 10, quantidade: 5 },
];

let venda = compras.map((i) => i.preco * i.quantidade);

let calcTotal = venda.reduce(
    (acumulador, i) => acumulador + i
    );
console.log(calcTotal);
/* 
 produto 01: 299,7
 produto 02: 13
 produto 03: 50
 total: 362,7
*/