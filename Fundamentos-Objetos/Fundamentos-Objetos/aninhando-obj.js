const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
}

estudante.endereco = {
  rua: 'Rua dos bobos',
  numero: 0,
  apartamento: true,
  complemento: 'ap 934',
}
console.log(estudante);

console.log(`O estudante mora na rua ${estudante.endereco.rua}, número ${estudante.endereco.numero}`);

