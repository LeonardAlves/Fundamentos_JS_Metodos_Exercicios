// 1. Crie um objeto chamado "livro" com as seguintes propriedades:

const livro = {
    titulo: "JavaScript: The Good Parts",
    autor: "Douglas Crockford",
    anoPublicacao: 2008,
    genero: "Programação",
}
console.log(livro);

// 2. crie uma funcao que receba um objeto livro como parametro e exiba seus detalhes no console no formato:

const anoAtual = new Date().getFullYear();

const livro2 = {
    titulo: "Eloquent JavaScript",
    autor: "Marijn Haverbeke",
    anoPublicacao: 2018,
    genero: "Programação",
}

livro2.idadePublicacao = anoAtual - livro2.anoPublicacao;

const mostrarDetalhes = function(livro) {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);   
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
    console.log(`Gênero: ${livro.genero}`);
    console.log(`Idade desde a Publicação: ${livro.idadePublicacao} anos`);
}
mostrarDetalhes(livro2);

// 3. Acesse e exiba cada propriedade do objeto "livro" criado no exercício 1 usando notação de colchetes.

const livro3 = {
    titulo: "You Don't Know JS",
    autor: "Kyle Simpson",
    anoPublicacao: 2015,
    genero: "Programação",
}

console.log("Titulo : " + livro3['titulo']);
console.log("Autor : " + livro3['autor']);
console.log("Ano de Publicação : " + livro3['anoPublicacao']);
console.log("Gênero : " + livro3['genero']);

// 4. Adicione uma nova propriedade chamada "avaliacoes" ao objeto "livro" criado no exercício 1. A propriedade deve ser um objeto que contém as seguintes subpropriedades: "nota" (número) e "comentario" (string). Em seguida, exiba o objeto atualizado no console.

const livro4 = {
    titulo: "You Don't Know JS",
    autor: "Kyle Simpson",
    anoPublicacao: 2015,
    genero: "Programação",
    avaliacoes: null,
}

const novaAvaliacao = { nota: 5, comentario: "Excelente livro para aprender JavaScript!" };
if (livro4.avaliacoes === null) {
    livro4.avaliacoes = novaAvaliacao;
} else {
    console.log("O livro já possui uma avaliação.");
}

console.log(livro4);

// 5. Altere o valor da propriedade "genero" do objeto "livro" criado no exercício 1 para "Aventura Fantástica". Em seguida, exiba o objeto atualizado no console.

const livro5 = {
    titulo: "lord of the rings",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
}

livro5.genero = "Aventura Fantástica";

console.log(livro5);

// 6. Remova a propriedade "avaliacoes" do objeto "livro" criado no exercício 4. Em seguida, exiba o objeto atualizado no console.

const livro6 = {
    titulo: "lord of the rings",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    avaliacao: 5,
}

console.log(livro6);

delete livro6.avaliacao;

console.log("Depois da remocao: ", livro6);




