string = 'MMM'

console.log(`fromRoman: ${fromRoman(string)}`)

function fromRoman(str) {
    let valueArray = []

    for(let i = 0; i < str.length; i++) {
        let isolatedRoman = str.slice(i, i + 1)
        let realValue = numMatchFor(isolatedRoman)
        valueArray.push(realValue)
    }
    result = valueArray.reduce(reducer)
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

function reducer(accumulator, currentValue, index, array) {
    let res
    let nextValue = array[index + 1]

    if(index == 1) {
        if(accumulator > currentValue) {
            res = accumulator - currentValue
        } else if (accumulator <= currentValue) {
            res = accumulator + currentValue
        }
    } else if (index != array.length - 1) {
        if(currentValue > nextValue) {
            res = accumulator + currentValue
        } else if(currentValue < nextValue) {
            res = accumulator - currentValue
        }
    } else {
        res = accumulator + currentValue
    }

    return res
}