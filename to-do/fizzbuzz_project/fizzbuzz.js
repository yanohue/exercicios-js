import Multiples from "./modules/multiples.js"

var button = document.getElementById("runBtn")
button.addEventListener("click", main)

var output
var fizz = new Multiples(3, 'fizz')
var buzz = new Multiples(5, 'buzz')
var multiplesArray = [fizz, buzz]
//needs auto create array

function main() {
    let start = document.getElementById("startInput")
    let end = document.getElementById("endInput")

    let s = Number(start.value)
    let e = Number(end.value)

    for(var i = s; i <= e; i++) {
        output = ''
        console.log(`${compareMultiples(i)}`)
    }
}

function compareMultiples(number) {  
    for(var j = 0; j < multiplesArray.length; j++) {
        if(number % multiplesArray[j].num == 0) {
            output += multiplesArray[j].word
        }
    }   
    if(output == '') {
        output += number
    }
    return output
}