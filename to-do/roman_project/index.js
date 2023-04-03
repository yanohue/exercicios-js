import Num from "./num_class.js"

var M = new Num('M' , 1000)
var CM = new Num('CM' , 900)
var D = new Num('D' , 500)
var CD = new Num('CD' , 400)
var C = new Num('C' , 100)
var XC = new Num('XC' , 90)
var L = new Num('L' , 50)
var X = new Num('X' , 10)
var IX = new Num('IX' , 9)
var V = new Num('V' , 5)
var IV = new Num('IV' , 4)
var I = new Num('I' , 1)

/* This table could be done better, dont know how tho */

var romanTable = [ M , CM , D , CD , C , XC , L , X , IX , V , IV , I ]

var string = 'MMMCMXCIX'
var number = 3999

console.log(`fromRoman: ${fromRoman(string)}`)
console.log(`fromDecimal: ${fromDecimal(number)}`)

function fromRoman(str) {               //done
    console.log('converting from roman...')

    let result = 0
    let isRoman = true
    let letterArray = sliceString(str)
    let numArray = findMatchFor(letterArray, isRoman)
    console.log(`num array: ${numArray}`)

    for(let i = 0; i < numArray.length; i++) {
        let num
        if(numArray[i] < numArray[i + 1]) {
            num = -Math.abs(numArray[i])
        } else {
            num = Math.abs(numArray[i])
        }
        result = result + num
    }

    return result
}
function fromDecimal(num) {             //work in progress
    console.log('converting from decimal...')

    let result = 0
    let isRoman = false
    let numArray = sliceString(num.toString())

    //[ERROR] findMatchFor doesnt work for fromDecimal function

    /* consider thousand, decimal, unit cases
    example:num = 3999
            numArray = 3,9,9,9
            letterArray = M,M,M,CM,XC,IX
            result = MMMCMXCIX 
    Variable numArray needs to be multiplied
    by the correct factor, and needed special 
    attention to the thousand decimal places */
        
    let letterArray = findMatchFor(numArray, isRoman)

    console.log(`letter array: ${letterArray}`)

    result = letterArray.join('')

    return result
}
function findMatchFor(array, isRoman) { //work in progress
    /* receives an array of characters, each being a number, 
    matches and converts roman numbers to decimal numbers
    and vice-versa, returns the resulting array */
    console.log(`finding match for: ${array}...`)

    let matchArray = []
    let match

    /* forEach use is inefficient here, because doesnt stop 
    when already found the correct pairing >>nested loop<< 
    here is a oportunity to apply better search algorithm */
    array.forEach(character => {
        romanTable.forEach(pairing => {
            if(isRoman) {
                match = compareRoman(character , pairing)
                if(match != null) {
                    console.log(`push: ${match}`)
                    matchArray.push(match)
                }
            } else {
                match = compareDecimal(character , pairing)
                if(match != null) {
                    console.log(`push: ${match}`)
                    matchArray.push(match)
                }
            }
        })
    })

    return matchArray
}
function compareRoman(char , pair) {    //done
    console.log('comparing roman...')
    if(char == pair.roman) {
        return pair.decimal
    }
    return null
}
function compareDecimal(char , pair) {  //done
    console.log('comparing decimal...')
    if(char == pair.decimal) {
        return pair.roman
    }
    return null
}
function sliceString(string) {          //done
    console.log('slicing string...')

    let charArray = []
    for(let i = 0; i < string.length; i++) {
        let char = string.slice(i, i + 1)
        charArray.push(char)
    }
    return charArray
}