const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante);

//console.log(stringEstudante);
//console.log(typeof stringEstudante);


//convertendo em string.
console.log(stringEstudante.nome); // undefined

//convertendo de volta para objeto.
const objetoEstudante = JSON.parse(stringEstudante);    
console.log(objetoEstudante);
console.log(typeof objetoEstudante);