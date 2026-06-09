 class Pessoa {
    constructor(nome,idade,email){
        this.nome = nome;
        this.idade = idade;
        this.email = email
    }

    apresentar(){
        console.log(`Meu nome é ${this.nome} e minha idade ${this.idade}`)
    }

    fazerAniversario(){
        this.idade += 1
    }
 }