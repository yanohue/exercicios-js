for(var i = 0; i <= 25; i++) {
    var compra = 500
    var desconto = 0
    compra =+ compra + (i * 100)
    if(compra < 600) {
        desconto = 0
    }
    if(compra >= 600) {
       desconto = (compra - 500) / 100 
    }

    var valorFinal = compra - (compra * (desconto / 100))

    console.log(`valor da compra: R$${compra} - porcentagem de desconto: ${desconto}% - valor final: R$${valorFinal}`) 
}