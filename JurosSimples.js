

function IncrementraJuros (valor, Juros){
    const AcrescimoDeJuros = (Juros / 100) * valor;
    return valor + AcrescimoDeJuros; 
}

console.log('O valor com Juros foi de:', IncrementraJuros(100, 10));
console.log('O valor com Juros foi de:', IncrementraJuros(200, 10));

