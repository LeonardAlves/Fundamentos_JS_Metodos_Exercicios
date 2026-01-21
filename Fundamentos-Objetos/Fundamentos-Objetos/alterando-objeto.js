const estudante = {
  nome: 'João',
  idade: 30,
  cpf: '123.456.789-00',
  cidade: 'São Paulo'
}

estudante.telefone = '11 98765-4321'; // Adicionando um novo atributo.

console.log(estudante.telefone);
console.log(estudante);

estudante.cidade = 'Rio de Janeiro'; // Alterando o valor de um atributo existente.

estudante.nome = 'Leonardo'; // Ao atribuir um novo valor, o atributo é atualizado.
console.log(estudante);

const estudande2 = {
  nome: 'Paula',
  idade: 32,

}
console.log(estudande2);

// Para deletar um atributo de um objeto, usamos a palavra-chave delete.

const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago"
  },
  status: "desaparecido"
}

delete objPersonagem.aliado; // Deletando o atributo aliado do objeto objPersonagem
console.log(objPersonagem);

// Tambem podemos deletar atributos utilizando notacao de colcetes
delete objPersonagem['status'];
console.log(objPersonagem);
