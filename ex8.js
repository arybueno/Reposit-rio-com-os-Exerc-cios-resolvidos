class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, cargo, bonus) {
        super(nome, salario, cargo);
        this.bonus = bonus;
        this.equipe = [];
    }

    adicionarFuncionario(funcionario) {
        this.equipe.push(funcionario);
    }

    calcularSalarioTotal() {
        return this.salario + this.bonus;
    }
}

const gerente = new Gerente("Carlos", 5000, "Gerente", 1500);
const funcionario = new Funcionario("Ana", 2500, "Atendente");

gerente.adicionarFuncionario(funcionario);

console.log("Equipe do gerente:");
console.log(gerente.equipe);

console.log("Salário total do gerente:");
console.log(`R$ ${gerente.calcularSalarioTotal()}`);
