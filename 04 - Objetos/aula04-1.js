/*
    Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilometro rodado.
    Crie um método que dado a quantidade de quilometro e o preço do combustível nos dê o valor gasto em reais para relizar este percurso.
 
*/

class Carro {
    marca;
    cor;
    gastoMedioKilometro;

    constructor(marca, cor, gastoMedioKilometro) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKilometro = gastoMedioKilometro;
    }

    gastoDePercurso(distancia, valorGasolina) {
        return distancia * this.gastoMedioKilometro * valorGasolina; 
    } 
}

const uno = new Carro('fiat', 'vermelho', 1/12);
const palio = new Carro('fiat', 'prata', 1/10)

console.log(uno.gastoDePercurso(70, 7));
console.log(palio.gastoDePercurso(80, 7))