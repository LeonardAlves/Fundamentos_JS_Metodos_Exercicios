const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  endereco: [{ // Mudando para um array de objetos 
    rua: 'Rua dos bobos',
    numero: 0,
    complemento: 'ap 934',
    }] // Agora endereco é um array que pode conter múltiplos endereços
}

estudante.endereco.push({ // Adicionando um novo endereço ao array
    rua: 'Avenida Brasil',
    numero: 100,
    complemento: 'casa 5',
});

console.log(estudante.endereco);
console.log(estudante.endereco[0]);

const listaEnderecosCompletos = estudante.endereco.filter((endereco) => endereco.complemento)
console.log(listaEnderecosCompletos);




