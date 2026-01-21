const estudantes = require('./estudantes.json');

function buscarInformacoes(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscarInformacoes(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const estudantePorIdade = buscarInformacoes(estudantes, 'telefone', '11987654321');
console.log(estudantePorIdade); 