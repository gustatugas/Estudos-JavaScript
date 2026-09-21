// declaração de variaveis
const precoCombustivel = 7;
let kilometro = 3855;
let gastoMedioPorGasolina = 60;
let custoTotal = 0

// processamento de dados
custoTotal = ((kilometro / gastoMedioPorGasolina) * precoCombustivel );

// saida de dados
console.log('Custo total da viagem é de: ' + custoTotal);