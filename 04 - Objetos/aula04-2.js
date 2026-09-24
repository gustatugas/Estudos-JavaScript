/*
    2) Crie uma classe para representa pessoas.
        Para cada pessoa teremos os atributos nome, peso e altura.
        As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
        Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao josé para dizer o valor do seu IMC;   
*/

class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return (this.peso / (this.altura * this.altura))
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        
        if (imc < 18.5) {
            return 'Peso Baixo'
        } else if (imc >= 18.5 && imc <= 24.9) {
            return 'Peso Normal'
        } else if (imc >= 25 && imc <= 29.9) {
            return 'Sobrepeso'
        } else if (imc >= 30 && imc <= 34.9) {
            return 'Obesidade I'
        } else if (imc >= 35 && imc <= 39.9) {
            return 'Obsesidade Severa II'
        } else {
            return 'Obesidade Mórbida III'
        }
    }
}

const José = new pessoa('José', 80, 1.75);

console.log(José.classificarIMC());