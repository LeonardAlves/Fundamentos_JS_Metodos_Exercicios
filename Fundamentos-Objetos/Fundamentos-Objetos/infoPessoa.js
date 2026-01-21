// 1. Definindo um objeto para armazenar informações de uma pessoa

const pessoa = {
    nome: "Ana",
    idade: 25,
    solteiro: false,
    hobbies: ["ler", "viajar", "nadar"],
}

pessoa.endereco = { // 2. Adicionando um objeto aninhado para o endereço.
    rua: "Rua das Flores",
    cidade: "São Paulo",
    estado: "SP",
};

function mostrarInfoPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade}`);
    console.log(`Solteiro: ${pessoa.solteiro ? 'Sim' : 'Não'}`);
    console.log(`Hobbies: ${pessoa.hobbies.join(', ')}`);
    console.log(`Endereco: ${pessoa.endereco ? `${pessoa.endereco.rua}, ${pessoa.endereco.cidade} - ${pessoa.endereco.estado}` : 'Não informado'}`);
}

mostrarInfoPessoa(pessoa);

pessoa.bairro.push("Centro"); // 3. Tentando adicionar um bairro ao endereço (isso causará um erro porque 'bairro' não está definido).

