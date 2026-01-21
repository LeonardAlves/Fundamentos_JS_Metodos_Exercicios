
const objPessoa = {
    nome: 'João',
    idade: 30,
    cpf: '123.456.789-00',
    cidade: 'São Paulo'
}

console.log(objPessoa);
console.log(`Nome: ${objPessoa.nome}`);
console.log(`Os tres primeiros numeros do cpf sao: ${objPessoa.cpf.substring(0, 3)}`);

// O metodo Substring só funciona em strings
