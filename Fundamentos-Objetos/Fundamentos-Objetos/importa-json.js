// importa-json.js
// import estudante from './estudante.json' 
const estudante = require('./estudante.json');

console.log(estudante);
console.log(typeof estudante);

// Acessando atributos do objeto importado
const chaves = Object.keys(estudante);
console.log(chaves);