var idade = [ 11, 12, 13, 14, 51, 16, 27, 38, 19, 10]
var count = 0
for(var i = 0; i < idade.length; i++) {
    if(idade[i] >= 18) {
        count++
    }
}
console.log(`Nº de pessoas maiores de 18: ${count}`)