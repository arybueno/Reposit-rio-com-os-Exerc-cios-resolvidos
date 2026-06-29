class Pagamento {
    constructor(valor) {
        this.valor = valor;
    }

    processar() {
        throw new Error("Método deve ser implementado");
    }
}

class CartaoCredito extends Pagamento {
    processar() {
        console.log(`Pagamento de R$${this.valor} no cartão.`);
    }
}

class Pix extends Pagamento {
    processar() {
        console.log(`Pagamento de R$${this.valor} via PIX.`);
    }
}

class Boleto extends Pagamento {
    processar() {
        console.log(`Pagamento de R$${this.valor} por boleto.`);
    }
}

function processarPagamentos(lista) {
    for (const pagamento of lista) {
        pagamento.processar();
    }
}

const cartao = new CartaoCredito(100);
const pix = new Pix(50);
const boleto = new Boleto(80);

const pagamentos = [cartao, pix, boleto];

processarPagamentos(pagamentos);
