class Produto{
    static totalProdutos = 0;

    constructor(nome, preco, quantidade){
        this.nome =nome;
        this.preco = preco;
        this.quantidade =quantidade;
        Produto.totalProdutos++;
    }

    static obterTotal(){
        console.log(this.totalProdutos)
    }

    calcularValorEstoque(){
        valorEstoque = this.preco * this.quantidade;
    }
}