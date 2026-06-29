class Livro {
    constructor(nome) {
        this.nome = nome;
    }

    toString() {
        return `Livro: ${this.nome}`;
    }
}

class Filme {
    constructor(nome) {
        this.nome = nome;
    }

    toString() {
        return `Filme: ${this.nome}`;
    }
}

class Musica {
    constructor(nome) {
        this.nome = nome;
    }

    toString() {
        return `Música: ${this.nome}`;
    }
}

const livro = new Livro("Dom Casmurro");
const filme = new Filme("Avatar");
const musica = new Musica("Imagine");

const lista = [livro, filme, musica];

for (const item of lista) {
    console.log(item.toString());
}
