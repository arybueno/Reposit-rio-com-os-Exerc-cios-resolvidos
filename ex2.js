class ContaBancaria{
    constructor(titular,saldo, numeroConta){
        this.titular = titular;
        this.saldo = saldo
        this.numeroConta = numeroConta
    }

    depositar(valor){
        this.saldo += valor;
        console.log("depósito feito!")
    }

    sacar(valor){
        if(valor <= this.saldo){
            this.saldo -= valor;
        }
    }

    exibirSaldo(){
        console.log(this.saldo)
    }



}
