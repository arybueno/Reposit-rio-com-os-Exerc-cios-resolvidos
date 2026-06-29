class Aluno {
    #nota;

    constructor(nota) {
        this.nota = nota;
    }

    get nota() {
        return this.#nota;
    }

    set nota(valor) {
        if (valor >= 0 && valor <= 10) {
            this.#nota = valor;
        } else {
            console.log("Nota inválida!");
        }
    }

    static media(nota1, nota2) {
        return (nota1 + nota2) / 2;
    }
}

const aluno = new Aluno(8);

console.log("Nota do aluno:", aluno.nota);
console.log("Média:", Aluno.media(8, 6));
