import Num from "./num_class.js"

var I = new Num('I' , 1)
var IV = new Num('IV' , 4)
var V = new Num('V' , 5)
var IX = new Num('IX' , 9)
var X = new Num('X' , 10)
var L = new Num('L' , 50)
var XC = new Num('XC' , 90)
var C = new Num('C' , 100)
var CD = new Num('CD' , 400)
var D = new Num('D' , 500)
var CM = new Num('CM' , 900)
var M = new Num('M' , 1000)

/* This table could be done better, dont know how tho */
var romanTable = [ I , IV , V , IX , X , L , XC , C , CD , D , CM , M ] 

var dataInput = 'MMMCMXCIX'
/* var dataInput = 3999 */

console.log(`result: ${convert(dataInput)}`)

function convert(input) {                   //done
    console.log('converting data input...')
    if(isDecimal(input)) {
        return fromDecimal(input)
    } else {
        return fromRoman(input)
    }
}

function isDecimal(data) {                  //done
    console.log('checking if is decimal...')
    if(typeof data == 'number') {
        return true
    } else {
        return false
    }
}

function fromRoman(str) {                   //done
    console.log('converting from roman...')

    let decimals = []

    let charArray = createArray(str)

    charArray.forEach(char => {
        let index = linearSearch(char , romanTable)
        decimals.push(romanTable[index].decimal)
        console.log(`decimals ${decimals}`)
    })
    return combine(decimals)
}

function combine(array) {                   //its garbage, needs refactor
    console.log('combining decimals...')

    let result

    for(let i = 0; i < array.length; i++) {
        let num
        if(array[i] < array[i + 1]) {
            num = -Math.abs(array[i])
        } else {
            num = Math.abs(array[i])
        }
        result = result + num
    }
    return result
}

function linearSearch(input, table) {       //done
    console.log('applying linear search...')

    for (let i = 0; i < table.length; i++) {
        if(input == table[i].roman) {
            return i
        }
    }
    return console.log('[ERROR] failed linear search')
}

function fromDecimal(num) {                 //done
    console.log('converting from decimal...')

    let numArray = createArray(num.toString())
    let multpliedReversedArray = useDecimalPlaces(numArray)
    let decomposedDecimalArray = decomposeThousandsPlaces(multpliedReversedArray)
    let romans = []

    decomposedDecimalArray.forEach(numeral => {
        let index = binarySearch(numeral , romanTable)
        romans.push(romanTable[index].roman)
    })
    return romans.join('')
}

function createArray(str) {                 //done
    console.log('creating array...')

    let charArray = []
    for(let i = 0; i < str.length; i++) {
        let char = str.slice(i, i + 1)
        charArray.push(char)
    }
    return charArray
}

function useDecimalPlaces(array) {          //done
    console.log('using decimal places...')

    let numArray = []
    let reversedArray = array.reverse()

    for (let i = 0; i < reversedArray.length; i++) {
        let num = array[i] * Math.pow(10, i)
        numArray.push(num)
    }
    reversedArray = numArray
    return reversedArray
}

function decomposeThousandsPlaces(array) {  //done
    console.log('decomposing into smaller parts...')

    let num = array[3] / 1000
    let result = array.slice(0, 3)

    for (let i = 0; i < num; i++) {
        result.push(1000)
    }
    return result.reverse()
}

function binarySearch(input, table) {       //done
    console.log('applying binary search...')

    let lowIndex =  0
    let highIndex = table.length - 1

    while(lowIndex != highIndex) {
        let pivotIndex = Math.floor((lowIndex + highIndex) / 2)

        if(table[pivotIndex].decimal == input) {
            return pivotIndex
        } else if (table[lowIndex].decimal == input) {
            return lowIndex
        } else if (table[highIndex].decimal == input) {
            return highIndex
        }
        else if(table[pivotIndex].decimal < input) {
            lowIndex = pivotIndex + 1
        }
        else {
            highIndex = pivotIndex
        }
    }
    return console.log('[ERROR] failed at binary search')
}