const estudantes = require('./estudantes.json');

function filtrarEstudantesPorIdade(lista, propriedade){
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);

    })
}

const listaEnderecosImcompletos = filtrarEstudantesPorIdade(estudantes, 'cep');
console.log(listaEnderecosImcompletos);