class ContaBancaria {
    #saldo;

    constructor(saldo) {
        this.#saldo = saldo;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    getSaldo() {
        return this.#saldo;
    }

    static converterParaDolarCanadense(valor, cotacao) {
        return valor / cotacao;
    }
}

let conta = new ContaBancaria(1000);

conta.depositar(500);
conta.sacar(300);

console.log(conta.getSaldo());

console.log(
    ContaBancaria.converterParaDolarCanadense(1000, 4)
);