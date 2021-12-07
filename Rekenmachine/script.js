

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("sum").addEventListener("click", sum);
    document.getElementById("multiply").addEventListener("click", multiply);
    document.getElementById("subtract").addEventListener("click", subtract);
    document.getElementById("divide").addEventListener("click", divide);
    document.getElementById("power").addEventListener("click", power);
});

function sum() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let result = number1 + number2;
    document.getElementById("result").innerText = "Het resultaat is: " + result;
}

function multiply() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let result = number1 * number2;
    document.getElementById("result").innerText = "Het resultaat is: " + result;
}

function subtract() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let result = number1 - number2;
    document.getElementById("result").innerText = "Het resultaat is: " + result;
}

function divide() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let result = number1 / number2;
    document.getElementById("result").innerText = "Het resultaat is: " + result;
}

function power() {
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let result = number1 ** number2 == 'Infinity' ? 'dit nummer is te groot om te berekenen' : number1 ** number2;
    document.getElementById("result").innerText = `Het resultaat is: ${result}`;
}