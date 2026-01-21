// 1. Crie funcao que recebe nome e retorna saudasao 

function saudacao(nome) {
    return `Olá ${nome}, seja bem-vindo`;
}

console.log(saudacao('Leonardo'));

// 2. Crie uma funcai que receba a idade de uma pessoa e maior de idade 

function maiorDeIdade(nome, idade) {
    if (idade >= 18) {
    console.log(`${nome}, é maior de idade`);
    } else {
        console.log(`${nome}, é maior de idade`);
    }
}
console.log(maiorDeIdade('Leonardo', 31));

// 3. crie uma funcao que verifica se string é palindromo

function verificarPalindromo(texto) {
    const textoInvertido = texto.split('').reverse().join('');
    return texto.toLowerCase() === textoInvertido.toLowerCase();
}

console.log(verificarPalindromo('tenet'));
console.log(verificarPalindromo('arara'));
console.log(verificarPalindromo('Leonardo'));

// 4. crie uma funcacao que recebe 3 numeros e determine qual maior usando If/Else

function numeroMaior(num1, num2, num3) {
    let maior = num1;

    if (num2 > maior) {
        maior = num2
    }

    if (num3 > maior) {
        maior = num3;
    }

    return maior;
}

console.log(numeroMaior(12, 34, 22));

// 5. crie uma arrow funtion chamada caculaPotencia, recebe dois valores 

const caculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

const base = 2;
const expoente = 6;

const resultado = caculaPotencia(base, expoente);
console.log(`o recultado da ${base} elevado a ${expoente} é ${resultado}`);