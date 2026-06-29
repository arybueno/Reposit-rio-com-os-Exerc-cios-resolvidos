class Endereco {
    constructor(rua, cidade, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
    }
}

class Contato {
    constructor(telefone, email) {
        this.telefone = telefone;
        this.email = email;
    }
}

class PerfilUsuario {
    constructor(nome, endereco, contato) {
        this.nome = nome;
        this.endereco = endereco;
        this.contato = contato;
    }

    exibirPerfil() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Rua: ${this.endereco.rua}`);
        console.log(`Cidade: ${this.endereco.cidade}`);
        console.log(`CEP: ${this.endereco.cep}`);
        console.log(`Telefone: ${this.contato.telefone}`);
        console.log(`Email: ${this.contato.email}`);
    }
}

const endereco = new Endereco("Rua A", "Paranavaí", "87700-000");
const contato = new Contato("44999999999", "teste@gmail.com");

const usuario = new PerfilUsuario("João", endereco, contato);

usuario.exibirPerfil();
