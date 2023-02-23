var resultado

for(var num = 1; num <= 10; num++){
    for(var i = 0; i <= 10; i++){
        calcularTabuada(num ,i)
        console.log(`${num} x ${i} = ${resultado}`)  
    }
}

function calcularTabuada(num1, num2){
    return resultado = num1 * num2;
}