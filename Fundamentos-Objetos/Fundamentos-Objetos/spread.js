const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
   enderecos: [{
     rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 43'
    },
    {
      rua: 'Rua Dona Clotilde',
      numero: '71',
      complemento: null
   }]
}

function exibirTelefones(teleone1, telefone2) {
  console.log(`Ligar para Telefone 1: ${teleone1}`);
  console.log(`Ligar para Telefone 2: ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
// Usando spread para passar os telefones

exibirTelefones(...estudante.telefones); // Spread operator (...) desestrutura o array em elementos individuais   

const dadosEnvio = {
  destinatario: estudante.nome,
  ...estudante.enderecos[0], // Spread para adicionar propriedades do primeiro endereço
}

console.log('Dados para envio:', dadosEnvio);