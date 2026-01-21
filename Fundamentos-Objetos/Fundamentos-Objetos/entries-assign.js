const meuObjeto = { a: 1, b: 2, c: 3 };
const chaves = Object.keys(meuObjeto);
const valores = Object.values(meuObjeto);

console.log(chaves); // Saída: ['a', 'b', 'c']
console.log(valores); // Saída: [1, 2, 3]

// Entries  

const meuObjeto2 = { a: 1, b: 2, c: 3 };
const entradas = Object.entries(meuObjeto2);

console.log(entradas);
// Saída: [['a', 1], ['b', 2], ['c', 3]]

// Assign

const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }