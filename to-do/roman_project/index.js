import Num from "./num_class.js"

//[SOLVED] Spaghetti code: convoluted organization and unnecessary complexity.
//[SOLVED] Too many functions! Prefer to comment over splitting into new functions.
//[SOLVED] Impure functions: a pure function uses the input only, and doesnt need extra data from outside the function to work.
//[SOLVED] Too much abstractions: abstraction is generally good but not necessary every time.

var I = new Num('I' , 1)
var IV = new Num('IV' , 4)
var V = new Num('V' , 5)
var IX = new Num('IX' , 9)
var X = new Num('X' , 10)
var XL = new Num('XL' , 40)
var L = new Num('L' , 50)
var XC = new Num('XC' , 90)
var C = new Num('C' , 100)
var CD = new Num('CD' , 400)
var D = new Num('D' , 500)
var CM = new Num('CM' , 900)
var M = new Num('M' , 1000)

const romanTable = [ M , CM , D , CD , C , XC , L , XL , X , IX , V , IV , I ]

//  input = number or string

var input = 10

console.log(`${checkDataTypeTranslate(input)}`)

function checkDataTypeTranslate(data) { //done => program starts here
    if(typeof data == 'number') {
        return fromDecimal(data)
    } else {
        return fromRoman(data)
    }
}
function fromRoman(str) {               //done
    let regex = /CM|CD|XC|XL|IX|IV|\w/gd
    let match = str.match(regex)
    let result = 0
    for(let i = 0; i < match.length; i++) {
        for(let j = 0; j < romanTable.length; j++) {
            if(match[i] == romanTable[j].roman) {
                result += romanTable[j].decimal
            }
        }
    }
    return result
}
function fromDecimal(num) {             //done
    let result = []
    romanTable.forEach(element => {
        while(num >= element.decimal) {
            num -= element.decimal
            result.push(element.roman)
        }
    })
    return result.join('')
}