const estudante = {
    nome: 'Ana',
    idade: 28,
    cpf: '32165498700',
    turma: 'JavaScript',
    bolsista: false,
    telefones: ['5511987654321', '5511987654322'],
    enderecos: [{
        rua: 'Rua das Flores',
        numero: 123,
        complemento: 'ap 45',
},
{
    rua: 'Avenida Central',
    numero: 456,
    complemento: null,
 }]
}

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `A chave ${chave} tem o valor ${estudante[chave]}`;
        console.log(texto);
}
    // console.log(chave); 
    // console.log(estudante[chave]);
}   

