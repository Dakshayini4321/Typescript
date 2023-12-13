var firstNumber = '';
var operator = '';
var secondNumber = '';
function appendValue(event) {
    var clickedButton = event.target.innerText;
    if (!operator) {
        firstNumber += clickedButton;
        document.getElementById('firstNumber').value = firstNumber;
    }
    else {
        secondNumber += clickedButton;
        document.getElementById('secondNumber').value = secondNumber;
    }
}
function setOperator(event) {
    operator = event.target.innerText;
}
function calculate() {
    var num1 = parseFloat(firstNumber);
    var num2 = parseFloat(secondNumber);
    var result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            result = 0;
            break;
    }
    document.getElementById('result').value = result.toString();
}
