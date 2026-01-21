const calculadora = {

    soma: function (a, b) {
        return a + b;
    },

    subtracao: function (a, b) {
        return a - b;
    },

    multiplicacao: function (a, b) {
        return a * b;
    },

    divisao: function (a, b) {
        if (b === 0) {
            return "Erro: Divisão por zero não é permitida.";
        }
        return a / b;
    }
};

calculadora.calcularMedia = function (numeros) {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
};

// Exemplo de uso:
console.log("Soma: " + calculadora.soma(10, 5));               // 15
console.log("Subtração: " + calculadora.subtracao(10, 5));     // 5
console.log("Multiplicação: " + calculadora.multiplicacao(10, 5)); // 50
console.log("Divisão: " + calculadora.divisao(10, 5));         // 2
console.log("Divisão por zero: " + calculadora.divisao(10, 0)); // Erro: Divisão por zero não é permitida.
console.log("Média: " + calculadora.calcularMedia([10, 20, 30, 40, 50])); // 30

