//Parametro ou argumentos 
// retorno

function exibeInfoEstudante(nome, nota) {
    console.log(`O nome é ${nome} e a nota é ${nota}`); 
}

exibeInfoEstudante('Leonardo', 10);
exibeInfoEstudante('Paula', 10);

//

function exibeInfoEstudante(nome, nota) {
    return `O nome é ${nome} e a nota é ${nota}`; 
}

console.log(exibeInfoEstudante('Leonardo', 10));
console.log(exibeInfoEstudante('Paula', 10));
