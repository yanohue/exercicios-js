function counting() {
    let start = document.getElementById('start')
    let finish = document.getElementById('finish')
    let step = document.getElementById('step')

    let count = document.getElementById('count')

    let str = Number(start.value)
    let end = Number(finish.value)
    let stp = Number(step.value)
    console.log(`str:${str} end:${end} stp:${stp}`)

    if(str.length == 0 || end.length == 0 || stp.length == 0 || str == end) {
        alert('Verifique se os dados foram inseridos corretamente!')
    } else {
        var array = []
        var flag = 0
        if(str < 0 && end < 0){ // if flagged turns str & end to positive
            flag = 1
            str = numToPositive(str)
            end = numToPositive(end)
        }
        if(str < end) {
            array = countUp(str, end, stp)
        } else if(str > end) {
            array = countDown(str, end, stp)
        }
        if(flag == 1){
            array = arrayToNegative(array)
        }
        formatCountInnerHTML(count, array) 
    }
}

function countUp(str, end, stp) {           // ascending count
    console.log('counting up...')
    let tempArray = []
    let numSteps = calcNumSteps(str, end, stp)
    for(let i = 0; i <= numSteps;  i++) {              
        let num = Number(str + (i * stp))   // calculates the current number
        if(num <= end){                     // checks if it is valid
            tempArray.push(num)             // if validated writes into the array
        }
    }
    console.log(`count up: ${tempArray}`)
    return tempArray
}

function countDown(str, end, stp) { // descending count
    console.log('counting down...')
    let tempArray = []
    let numSteps = calcNumSteps(str, end, stp)
    for(let i = 0; i <= numSteps;  i++) {        
        let num = Number(str - i * stp)     // calculates the current number
        if(num >= end){                     // checks if it is valid
            tempArray.push(num)             // if validated writes into the array
        }
    }
    console.log(`count down: ${tempArray}`)
    return tempArray 
}

function calcNumSteps(str, end, stp) { // calculates the number of steps
    let numSteps = 0
    let operation = 0
    if(str < end) {
        operation = 1
    } else if (str > end) {
        operation = 2
    }
    if (str > 0 && end < 0) {
        operation = 1
    } else if (str < 0 && end > 0) {
        operation = 2
    }
    console.log(`operation: ${operation}`)
    switch(operation) {
        case 1:
            numSteps = Math.round(end / stp)
            break
        case 2:
            numSteps = Math.round(str / stp)
            break
        default:
            console.log(`[ERROR]: operation invalid`)
            break
    }
    console.log(`numSteps: ${numSteps}`)
    return Math.abs(numSteps)
}

function numToPositive(num) { // returns the absolute value of num
    console.log('converting num to positive...')
    num = Math.abs(num)
    console.log(`num to positive: ${num}`)
    return num
}

function arrayToNegative(array) { // returns negative value of the absolute value of array
    console.log('converting array to negative...')
    tempArray = array.map(element => -Math.abs(element))
    console.log(`array to negative: ${tempArray}`)
    return tempArray
}

function formatCountInnerHTML(count, array) { // format & pass the count result to HTML
    console.log('formating count...')
    let msg = array.join(' > ')
    count.innerHTML = `contagem: ${msg}`  
}