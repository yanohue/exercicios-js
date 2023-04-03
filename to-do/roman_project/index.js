import Num from "./num_class.js"

var M = new Num('M' , 1000)
var CM = new Num('CM' , 900)
var D = new Num('D' , 500)
var C = new Num('C' , 100)
var XC = new Num('XC' , 90)
var L = new Num('L' , 50)
var X = new Num('X' , 10)
var IX = new Num('IX' , 9)
var V = new Num('V' , 5)
var IV = new Num('IV' , 4)
var I = new Num('I' , 1)

var romanTable = [ M , D , C , L , X , V , I , CM , XC , IX , IV ]

var string = 'MMMCMXCIX'
var number = 3999

/* console.log(`fromRoman: ${fromRoman(string)}`) */

console.log(`fromDecimal: ${fromDecimal(number)}`)

function fromRoman(str) {
    console.log('converting from roman...')

    let result = 0
    let letterArray = sliceString(str)
    let numArray = findMatchFor(letterArray)
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

function fromDecimal(num) {
    console.log('converting from decimal...')

    let result = 0
    let mult = [ 1000 , 100 , 10 , 1 ]
    let numArray = sliceString(num.toString())

    for (let i = 0; i < numArray.length; i++) {
        numArray[i] = numArray[i] * mult[i]
        if(numArray[i] >= 1000) {
            let n = numArray[i] / 1000
            numArray.slice(1 , 4)

        }
    }

    
        
    let letterArray = findMatchFor(numArray)

    result = letterArray.join('')

    return result
}

function sliceString(string) {
    console.log('slicing string...')

    let charArray = []
    for(let i = 0; i < string.length; i++) {
        let char = string.slice(i, i + 1)
        charArray.push(char)
    }
    return charArray
}

function findMatchFor(array) {
    console.log(`finding match for: ${array}...`)

    let matchArray = []
    const type = element => typeof(element)

    /* receives an array of characters, each being a number, 
    matches and converts roman numbers to decimal numbers
    and vice-versa, returns the resulting array */

    array.forEach(character => {
        let match
        romanTable.forEach(pairing => {
            if(array.some(type) == 'string') {
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

function compareRoman(char , pair) {
    console.log('comparing roman...')
    if(char == pair.roman) {
        return pair.decimal
    }
    return null
}

function compareDecimal(char , pair) {
    console.log('comparing decimal...')
    if(char == pair.decimal) {
        return pair.roman
    }
    return null
}