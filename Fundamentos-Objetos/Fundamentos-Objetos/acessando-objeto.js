const estudante = {
    nome: 'João',
    idade: 30,
    cpf: '123.456.789-00',
    cidade: 'São Paulo'
}

estudante.nome

function exibirInfoPessoa(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibirInfoPessoa(estudante, 'nome'));
console.log(exibirInfoPessoa(estudante, 'cpf'));
