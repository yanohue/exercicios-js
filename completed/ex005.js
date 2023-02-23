var Values = [15, 10, 25]

console.log('Values in read order:')
printValues()       //prints values in reading order


console.log('Values in ascending order:')
sortValues()
printValues()       //prints values in ascending order

console.log('Values in descending order:')
Values.reverse()
printValues()       //prints values in descending order

function printValues() {
    Values.forEach(element => console.log(element))
}

function sortValues() {
    Values.sort(function(a, b) {
        return a - b
    })
}