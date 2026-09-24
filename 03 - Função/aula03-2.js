const precoetiqueta = 100;

function criarDesconto(formaDePagamento) {
    if (formaDePagamento === 1) {
        console.log(precoetiqueta - (precoetiqueta * 0,1));
        
    } else if (formaDePagamento === 2) {
        console.log(precoetiqueta - (precoetiqueta * 0,15));
    } else if (formaDePagamento === 3) {
        console.log(precoetiqueta);
    } else if (formaDePagamento === 4) {
        console.log(precoetiqueta + (precoetiqueta * 0,1));
    }
}

criarDesconto(2);