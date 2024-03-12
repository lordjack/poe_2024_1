var notas = [5, 6, 7, 8, 9];

var notasFinais = notas.map((elem) => {
  return elem + 1;
});

for (let item of notasFinais) {
  console.log(item);
}

let animal = [
  { raca: "Schitz", idade: 3 },
  { raca: "Bulldog", idade: 1 },
  { raca: "Pug", idade: 0.3 },
];

animal.map((e) =>
 console.log(e.raca + " - " + e.idade));

 let pessoas = [
    { nome: "Jack", idade: 36 },
    { nome: "Ana", idade: 18 },
    { nome: "Maria", idade: 15 },
  ];

let pessoaFilter = pessoas.filter(
    (elem)=>elem.idade>=18
);
console.log(pessoaFilter);


