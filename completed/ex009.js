var idade = [ 11, 12, 13, 14, 51, 16, 27, 38, 19, 10, 5, 2, 73, 84, 55]
var count = [ 0, 0, 0, 0, 0]
var range = [15, 30, 45, 60, 61]

for(var i = 0; i < idade.length; i++) {
    var c
    if(idade[i] <= 15) {
        c = 0
        count[c]++
    } else if(idade[i] <= 30) {
        c = 1
        count[c]++
    } else if(idade[i] <= 45) {
        c = 2
        count[c]++
    } else if(idade[i] <= 60) {
        c = 3
        count[c]++
    } else {
        c = 4
        count[c]++
    } 
}

for(var i = 0; i < count.length; i++){
    if(i == 0) {
        console.log(`Nº de pessoas com até 15 anos: ${count[i]}`)
        console.log(`${calcPercent(count[i]).toFixed(2)}%`)
    } else if(i == 4) {
        console.log(`Nº de pessoas com mais de 61 anos: ${count[i]}`)
        console.log(`${calcPercent(count[i]).toFixed(2)}%`)
    } else {
        console.log(`Nº de pessoas de ${range[i - 1] + 1} até ${range[i]} anos: ${count[i]}`)
    }
}

function calcPercent(num) {
    return num / (15 / 100)
}