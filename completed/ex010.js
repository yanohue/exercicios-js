var num = 100

even = []
odd = []

for(var i = 1; i <= num; i++) {
    if(i % 2 == 0) {
        even.push(i)
    } else {
        odd.push(i)
    }
}

console.log(`PARES: ${even}`)
console.log(`IMPARES: ${odd}`)
