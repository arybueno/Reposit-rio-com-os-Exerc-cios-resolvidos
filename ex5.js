class Usuario {
    #senha;

    constructor(nome, senha) {
        this.nome = nome;
        this.#senha = senha;
    }

    autenticar(senha) {
        return senha == this.#senha;
    }

    alterarSenha(senhaAtual, novaSenha) {
        if (this.autenticar(senhaAtual)) {
            this.#senha = novaSenha;
        }
    }
}

const usuario = new Usuario("eu", "1234");

console.log(usuario.autenticar("1234"));

usuario.alterarSenha("1234", "abcd");

console.log(usuario.autenticar("abcd"));
