string = 'MMMX'

console.log(`fromRoman: ${fromRoman(string)}`)

function fromRoman(str) {
    let valueArray = []

    for(let i = 0; i < str.length; i++) {
        let isolatedRoman = str.slice(i, i + 1)
        let realValue = numMatchFor(isolatedRoman)
        valueArray.push(realValue)
    }
    result = combineValues(valueArray)
    return result
}

function numMatchFor(letter) {
    let num
    switch (letter) {
        case 'M':
            num = 1000
            break;

        case 'D':
            num = 500
            break;

        case 'C':
            num = 100
            break;

        case 'L':
            num = 50
            break;

        case 'X':
            num = 10
            break;

        case 'V':
            num = 5
            break;

        case 'I':
            num = 1
            break;

        default:
            console.log(`[ERROR] invalid value: ${letter}`)
    }
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

