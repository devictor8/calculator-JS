var operation = ''
var calculatorScreen = document.querySelector('#screenRes')

function input(value) {
    operation += value
    console.log(operation)
    printScreen()
}

function printScreen() {
    calculatorScreen.innerHTML = operation.replace(' * ', ' x ')
}

function result() {
    let res = eval(operation)
    calculatorScreen.innerHTML = res
    operation = `${res}`
}

function clearScreen() {
    console.log('clear')
    operation = ''
    calculatorScreen.innerHTML = ''
}