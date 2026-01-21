// Exercício 1: Usando forEach para imprimir elementos com seus índices.S

const array = [1, 2, 3, 4, 5];

array.forEach((elemento, indice) => {
    console.log(`Indice ${indice}: Elemento ${elemento}`);
});

// Exercício 2: Criar uma função que recebe um array e uma função como parâmetros e retorna um novo array com os resultados da aplicação da função em cada elemento do array original.

function executaOperacaoEmArray(arr, func) {
    return arr.map(func);
}

function dobrar(num) {
    return num * 2;
}  

const listaNumeros = [1, 2, 3, 4, 5];
const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobrar);
console.log(listaNumerosDobrados); 

// Exercício 3:

const numeros = [10, 20, 30, 40, 50];

const numeroProcurado = 30;

let posicao = -1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroProcurado) {
        posicao = i;
        break;
    }
}

console.log(`O número ${numeroProcurado} está na posição: ${posicao}`);

// Exercicio 4: Procurar um aluno em duas listas diferentes usando concat e find.   

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todosAlunos = nomesTurmaA.concat(nomesTurmaB); 
const alunoProcurado = todosAlunos.find(aluno => aluno === 'Ana Souza');

if (alunoProcurado) {
  console.log(`Aluno encontrado: ${alunoProcurado}`);
} else {
  console.log('Aluno não encontrado.');
}

// Exercício 5

const num = [6, 9, 12, 15, 18, 21];

num.forEach(numero => {
 const resultado = numero * 3;
 console.log(resultado);
});

const indiceDoNumero18 = num.findIndex(numero => numero === 18);

if (indiceDoNumero18 !== -1) {
 console.log(`O número 18 está no índice: ${indiceDoNumero18}`);
} else {
 console.log('Número 18 não encontrado no array.');
}