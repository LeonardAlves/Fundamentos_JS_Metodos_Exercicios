const contaBancaria = {
    titular: "Leonardo Silva",
    saldo: 1500.00,
    depositar: function(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
    },
    sacar: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para saque.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado. Novo saldo: R$${this.saldo.toFixed(2)}`);
        }
    },
};

const cliente = {   
    nome: "gustavo",
    conta: contaBancaria
};  

function mostrarSaldo(cliente) {
    console.log(`Cliente: ${cliente.nome}`); 
    console.log(`Saldo:) R$${cliente.conta.saldo.toFixed(2)}`); 
}

cliente.conta.depositar(500);
cliente.conta.sacar(200);
mostrarSaldo(cliente);


    