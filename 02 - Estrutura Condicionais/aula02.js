// declaração de variaveis
const precoCombustivel = 7;
const kilometro = 3855;
const gastoMedio = 30;
let custoTotal = 0;
const valorGasolina = 7;
const valorEtanol = 5;
const tipoDeCombustivell = 'Gasolina'
const MediaKilometro = kilometro / gastoMedio

// processamento de dados
if (tipoDeCombustivell == 'Gasolina') {
    custoTotal = (MediaKilometro * valorGasolina);
} else {
    custoTotal = (MediaKilometro * valorEtanol);
}

// saida de dados
console.log('Gasto com ' + tipoDeCombustivell + ' será de R$' + custoTotal.toFixed(2))