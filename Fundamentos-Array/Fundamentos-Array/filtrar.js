const alunos = ['Ana', 'Bia', 'Carlos', 'Daniel', 'Eva'];
const medias = [7, 4, 8, 6, 5];

const tamanhoNome = alunos.filter((aluno) => {
    return aluno.length <= 4;
});

console.log(tamanhoNome);

const reprovados = alunos.filter((alunos, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);