// 1. Definindo um objeto para armazenar informações de uma pessoa e suas notas

const pessoa = {
    nome: "Carlos",
    notas: [8, 7.5, 9, 6],

calcularMediaNotas: function () {
    const soma = this.notas.reduce((soma, nota) => soma + nota, 0);
    const media = soma / this.notas.length;
    return media.toFixed(2);   
    },

classificarDesempenho: function () { 
    const media = this.calcularMediaNotas();
    
    if (media >= 9) {
        return "Excelente";
    } else if (media >= 7.5) {
        return "Bom";
    } else if (media >= 6) {
        return "Regular";
    }
    return "Insuficiente";
}
};


const mediaCalculada = pessoa.calcularMediaNotas();
console.log(`Média das notas de ${pessoa.nome}: ${mediaCalculada}.`);

const desempenho = pessoa.classificarDesempenho();
console.log(`Desempenho de ${pessoa.nome}: ${desempenho}.`);
console.log('---');


// 2.   Definindo um objeto para representar um carro

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Prata",
}

// loop for in para percorrer as propriedades do objeto carro e exibir o nome da propriedade e valores no console.

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

// adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

carro.kmPorLitro = 14; // Consumo médio
carro.tipoCombustivel = "Gasolina"; 
carro.numeroPortas = 4;
console.log("Características adicionais do carro:");

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

console.log('---');

