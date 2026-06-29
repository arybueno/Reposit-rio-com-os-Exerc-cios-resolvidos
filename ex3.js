class Produto {
    static totalProdutos = 0;

    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;

        Produto.totalProdutos++;
    }

    static obterTotal() {
        console.log(Produto.totalProdutos);
    }

    calcularValorEstoque() {
        return this.preco * this.quantidade;
    }
}

const produto = new Produto("Mouse", 80, 5);

console.log(produto.calcularValorEstoque());
Produto.obterTotal();
