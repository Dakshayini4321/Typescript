

let firstNumber: string = '';
let operator: string = '';
let secondNumber: string = '';



function appendValue(event: MouseEvent): void {
    const clickedButton = (event.target as HTMLButtonElement).innerText;
    if (!operator) {
        firstNumber += clickedButton;
            (document.getElementById('firstNumber') as HTMLInputElement).value = firstNumber;
    
    } 
    else 
    {
        secondNumber += clickedButton;
        (document.getElementById('secondNumber') as HTMLInputElement).value = secondNumber;
    }
}



function setOperator(event: MouseEvent): void {
    operator = (event.target as HTMLButtonElement).innerText;
}

function calculate(): void {
    
    
    const num1: number = parseFloat(firstNumber);
    const num2: number = parseFloat(secondNumber);

    let result: number;

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

    
    (document.getElementById('result') as HTMLInputElement).value = result.toString();

}