if (1 > 0) {
    var estudante = 'Caroline';
    console.log(estudante);
}

estudante = 'Ana',
console.log(estudante);

// if (1 > 0) {
//     let estudante = 'Caroline';
//     console.log(estudante);
// } 
//
// estudante = 'Ana',
// console.log(estudante);

// no segundo exaplo temos duas variaveis 'estudante'

// Escopo global

const nome ='Leo'  //variavel  global

function comprimentar() {
    console.log(`Olá, ${nome}`);
}

comprimentar();

// Escopo Bloco

//  declaraçáo de variavel dentro de {} em if, for, while.

if (1 > 0) {
    let nome = 'Paula'; // variavel bloco 
    console.log(nome);
}

console.log(nome); // erro fora do bloco

// Nota !!

if (1 > 0) {
    var pessoa = 'ana'; // variavel global VAR 
    console.log(nome);
}

console.log(nome); // ana