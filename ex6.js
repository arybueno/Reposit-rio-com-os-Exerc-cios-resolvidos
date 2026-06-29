class Pilha{
    #itens = []

    empilhar(item){
        this.#itens.push(item)
    }
    desempilhar(){
        this.#itens.pop()
    }
    topo(){
        return this.#itens.at(-1)
    }
    estaVazia(){
        if(this.#itens.length == 0){
            return false;
        }
    }
    get tamanho(){
        return this.#itens.length
    }
}
