const pessoaOriginal = {
    id: 1,
    nome: "Ana",
    idade: 28,
};

// crie uma funcao que recebe um objeto pessoa e retorna uma copia do objeto


function copiarPessoa(pessoa) {
    return { ...pessoa };
}   

// Modificaque a copia adicionando e alterando uma propriedade sem alterar o objeto original

const pessoaCopia = copiarPessoa(pessoaOriginal);
pessoaCopia.nome = "Carlos";    
pessoaCopia.cidade = "Rio de Janeiro";

console.log("Objeto original:");
console.log(pessoaOriginal);
console.log("Cópia modificada:");
console.log(pessoaCopia);