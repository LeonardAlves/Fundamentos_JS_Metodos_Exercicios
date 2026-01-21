const arquivo = require('./dados.json');
console.log(arquivo);

const produto = {
    id: 1,
    nome: "Caneta",
    preco: 25.50,
}

const produtoString = JSON.stringify(produto);
console.log(produtoString);
console.log(typeof produtoString);