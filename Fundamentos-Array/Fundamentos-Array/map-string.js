const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);

// percorer string e padronizar todas as letras minusculas usando o loop.

const nome = "Leonardo";
let nomeMaiusculo = "";

for (let i = 0; i < nome.length; i++) {
  nomeMaiusculo += nome[i].toUpperCase();
}
console.log(nomeMaiusculo);