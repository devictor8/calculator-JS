operation = ''

function input(value) {
    operation += value
    console.log(operation)

}

function printScreen() {
    var calculatorScreen = document.querySelector('#screenRes')
}

function result() {
    let res = eval(operation)
    console.log(res)
}