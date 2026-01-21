// 3. Criando uma lista (array) de objetos para armazenar informações de várias pessoas

const pessoas = [
    {
        nome: "Ana",
        idade: 25,
        cidade: "Duna",
    }]

console.log(pessoas[0].nome);  // Acessando o nome da primeira pessoa na lista

pessoas.push({
    nome: "Bruno",
    idade: 30,
    cidade: "Arrakis",
});

console.log(pessoas);

function mostrarListaPessoas(lista) {
    lista.forEach((pessoa, index) => {
        console.log(`Pessoa ${index + 1}:`);
        console.log(`Nome: ${pessoa.nome}`);
        console.log(`Idade: ${pessoa.idade}`);
        console.log(`Cidade: ${pessoa.cidade}`);
        console.log('---');
    });
}

mostrarListaPessoas(pessoas);

function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

const pessoasEmDuna = filtrarPorCidade(pessoas, "Duna");
console.log("Pessoas em Duna:", pessoasEmDuna);

const pessoasEmArakis = filtrarPorCidade(pessoas, "Arrakis");
console.log("Pessoas em Arrakis:", pessoasEmArakis);