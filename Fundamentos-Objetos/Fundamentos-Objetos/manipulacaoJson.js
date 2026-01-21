const animais = require('./animais.json');

console.log("animais.json importado:");
console.log(animais);

// Convertendo o conteudo lido para objeto json.parse()

const animaisObj = JSON.parse(JSON.stringify(animais));

console.log("Animais como objeto JavaScript:");
console.log(animaisObj);
console.log("Tipo de dados de animaisObj:", typeof animaisObj);

// adicionando um novo animal ao objeto

const novoAnimal = {
    id: 4,
    nome: "Leão",
    tipo: "Panthera leo",
    habitat: "Savana"
};

animaisObj.animais.push(novoAnimal);

console.log("Objeto animais após adicionar novo animal:");
console.log(animaisObj);

// modificando habitat do animal com id 2

const animalId2 = animaisObj.animais.find(animal => animal.id === 2);
animalId2.habitat = "Polo sul e polo Norte"; 

console.log("Objeto animais após modificar habitat do animal com id 2:");
console.log(animaisObj);

// removendo o animal com id 1

const indexAnimalId1 = animaisObj.animais.findIndex(animal => animal.id === 1);
if (indexAnimalId1 !== -1) {
    animaisObj.animais.splice(indexAnimalId1, 1);
}   

console.log("Objeto animais após remover o animal com id 1:");
console.log(animaisObj);