// 1- crie 3 varieveis de cada tipo e print console

let string = "Texto";
let numero =  33;
let Boleano = 0;

console.log( string, numero, Boleano );

// 2-  Crie duas vareaveis, conbine em um 3 e printe em duas maneiras

const nome ='Leonardo';
const Sobrenome ='Santos';

const nomeCompleto = nome + ' ' + Sobrenome;
console.log(nomeCompleto);

const nomeCompletoTemplat = `${nome} ${Sobrenome}`;
console.log(nomeCompletoTemplat);

// 3- crie duas vareaveis, combine em uma 3 e printa junto com texto

const quantidade = 2
const carros = 'Porsche'

const estoque = `Atualmente temos ${quantidade} ${carros} em estoque`;
console.log(estoque); 

// 4- Crie uma vereavel com um valor e retribua um novo valor 

let vareavel = 'Ana'
console.log(vareavel);

vareavel = 'Paula'
console.log(vareavel); 

// 5- Declare uma variavel com Var for em escopo global e printa no console

var pessoaFora = 'Paula';

if (1 > 0) {
    var pessoaDentro = 'ana'; // variavel global VAR 
    console.log(pessoaFora);
    console.log(pessoaDentro);
}

console.log(pessoaFora);
console.log(pessoaDentro);

// 6- crie uma vareavel boleana se vai chover com estrutura condicional if 

const estaChovendo = true; 

if (estaChovendo) {
    console.log('vai chover');
} else {
    console.log('nao vai chover');
}