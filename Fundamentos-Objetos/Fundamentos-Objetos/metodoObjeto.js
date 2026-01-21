// utilize o objeto carro do exercicio propriedades iniciais (marca, modelo, ano, cor) 

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Prata",
    ligado: false,
    placa: "ABC-1234",

    // Metodo para ligar o carro

    ligar: function () {
        if (!this.ligado) {
            this.ligado = true;
            console.log("O carro está ligado.");
        } else {
            console.log("O carro está desligado.");
        }
    },

    desligar: function () {
        if (this.ligado) {
            this.ligado = false;
            console.log("O carro está desligado.");
        } else {
            console.log("O carro já está desligado.");
        }
    },

    // Metodo para obter detalhes do carro 
    obterDetalhes: function () {
        const estado = this.ligado ? "ligado" : "desligado";
        return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
    }
};

// Defina a propriedade 'placa' do carro como nao enumeravel
Object.defineProperty(carro, 'placa', { enumerable: false });

// utilize um loop for...in para percorrer as propriedades enumeraveis do objeto carro
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

// Utilize Object.keys() para obter um array com as propriedades enumeraveis do objeto carro
const chavesEnumeraveis = Object.keys(carro);


// Testando os metodos do objeto carro
console.log(carro.obterDetalhes());
carro.ligar();
carro.desligar();
carro.desligar();   