import romanNumber from "./romanNumber_class.js"
import Table from "./table_class.js"

var M = new romanNumber( 'M' , 1000)
var D = new romanNumber( 'D' , 500)
var C = new romanNumber( 'C' , 100)
var L = new romanNumber( 'L' , 50)
var X = new romanNumber( 'X' , 10)
var V = new romanNumber( 'V' , 5)
var I = new romanNumber( 'I' , 1)

var romanTable = new Table( M , D , C , L , X , V , I )

var string = 'MMMX'

console.log(`fromRoman: ${fromRoman(string)}`)

function fromRoman(str) {
    let valueArray = []

    for(let i = 0; i < str.length; i++) {
        let isolatedRoman = str.slice(i, i + 1)
        let realValue = numMatchFor(isolatedRoman)
        valueArray.push(realValue)
    }
    let result = combineValues(valueArray)
    return result
}

function numMatchFor(letter) {
    let num

    

    return num
}

function combineValues(array) {
    let res = 0
    let num
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] < array[i + 1]) {
            num = -Math.abs(array[i])
            console.log(`num: ${num}`)
        } else {
            num = Math.abs(array[i])
            console.log(`num: ${num}`)
        }
        res = res + num
        console.log(`res: ${res}`)
    }

    return res
}