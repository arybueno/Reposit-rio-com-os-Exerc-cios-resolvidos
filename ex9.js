```javascript
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = 0;
    }

    acelerar() {
        this.velocidade += 10;
    }

    frear() {
        this.velocidade -= 10;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, combustivel, litrosNoTanque) {
        super(marca, modelo);
        this.combustivel = combustivel;
        this.litrosNoTanque = litrosNoTanque;
    }

    acelerar() {
        super.acelerar();
        this.litrosNoTanque--;
    }
}

class CarroEletrico extends Carro {
    constructor(marca, modelo, bateria) {
        super(marca, modelo, "Elétrico", 0);
        this.bateria = bateria;
    }

    acelerar() {
        super.acelerar();
        this.bateria--;
    }
}

const carro = new CarroEletrico("Tesla", "Model 3", 100);

carro.acelerar();

console.log("Velocidade:", carro.velocidade);
console.log("Bateria:", carro.bateria);
```
