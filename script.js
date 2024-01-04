var menuImg = document.getElementById('menuIcon')
var sidebar = document.getElementById('sideBar') 
var isMenuOpen = false
var darkModeCheckBox = document.getElementById('darkMode')  

const calculator = {
    calculatorScreen: document.querySelector('#screenRes'),
    operation: ''
}

function input(value) {
    calculator.operation += value
    console.log(calculator.operation)
    printScreen()
}

function printScreen() {
    calculator.calculatorScreen.innerHTML = calculator.operation.replace(' * ', ' x ')
}

function result() {
    try {
        let res = eval(calculator.operation)
        if (res != undefined && res != Infinity) {
            calculator.calculatorScreen.innerHTML = res
            calculator.operation = `${res}`
        } else {
            calculator.operation = ''
            calculator.calculatorScreen.innerHTML = 'Enter a valid operation'
        }
    } catch {
        calculator.calculatorScreen.innerHTML = 'ERROR'
        calculator.operation = ''
    }
}

function clearScreen() {
    console.log('clear')
    calculator.operation = ''
    calculator.calculatorScreen.innerHTML = ''
}

function menuListener(main = false) {
    if (isMenuOpen || main) {
        closeMenu()
    } else {
        openMenu()
    }
    isMenuOpen = !isMenuOpen
}

function openMenu() {
    menuImg.src = 'images/close_menu_icon.png'
    sidebar.style.display = 'block'
}

function closeMenu() {
    menuImg.src = 'images/open_menu_icon.png'
    sidebar.style.display = 'none'
}

function checkboxState() {
    if (darkModeCheckBox.checked) {
        darkMode()
    } else {
        location.reload()
    }
}

function backSpaceButton() {
    calculator.operation = calculator.operation.slice(0, -1)
    calculator.calculatorScreen.innerHTML = calculator.operation
}

function darkMode() {
    document.getElementById('mainSpace').style.backgroundColor = '#533308'
    document.getElementById('screenRes').style.backgroundColor = '#884901'
    document.getElementById('sideBar').style.backgroundColor = '#333333'
    document.body.style.backgroundColor = '#704B23'
    document.body.style.color = '#FFFFFF'
    document.getElementById('equalButton').style.backgroundColor = '#9e4301'
    let aux = document.querySelectorAll('.special')
    for(let i = 0; i < aux.length; i++) {
        aux[i].style.color = '#FFFFFF'
    }
    aux = document.querySelectorAll('.numberButton')
    for(let i = 0; i < aux.length; i++) {
        aux[i].style.backgroundColor= '#ff7e22'
    }
    aux = document.querySelectorAll('.operatorsButtons')
    for(let i = 0; i < aux.length; i++) {
        aux[i].style.backgroundColor= '#fa700d'
    }
}