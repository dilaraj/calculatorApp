// Getting element
const element = document.querySelectorAll('.num');
const display = document.querySelector('.ans');
const clr = document.querySelector('.clr');
const equals = document.querySelector('.eq');

// Creating the basic variables
let num1, num2, operation;
let currentInput = '';

// Creating basic math operation functions
const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => {
    if (n1 == '0') {
        display.innerHTML = "You can't do that silly";
    } else {
        return n1 / n2
    }
};

// Operate function
let operate = (n1, oper, n2) => {
    switch (oper) {
        case '+':
            return add(n1, n2)
        case '−': 
            return subtract(n1, n2)
        case '×':
            return multiply(n1, n2)
        case '÷':
            return divide(n1, n2)
    }
}

// Displaying buttons values in display screen
populateDisplay = () => {
    let selectedCount = 0;
    for ( let i = 0; i < element.length; i++ ) {
        element[i].addEventListener('click', () => {
            const value = element[i].value;

            if (['+', '−', '×', '÷'].includes(value)) { // If an operator is clicked
                if (num1 !== undefined && !operation) {
                    operation = value; // Set operation is num1 is already set
                    currentInput += value;
                    display.innerHTML = currentInput;
                }
            } else { // If a number is clicked
                currentInput += value;
                display.innerHTML = currentInput;

                if (!operation) {
                    num1 = parseFloat(currentInput);
                } else {
                    num2 = parseFloat(currentInput.split(operation)[1])
                }
            }
        });  
    }
    

    equals.addEventListener('click', () => {
        if (num1, operation, num2) {
            const result = operate(num1, operation, num2);
            display.innerHTML = result;

            num1 = result;
            num2 = operation = undefined;
            currentInput = result.toString();
            selectedCount = 0;
        } else {
            display.innerHTML = "Enter a full equation!!"
        }
        
    })

    clr.addEventListener('click', () => {
        display.innerHTML = '0';
        num1 = num2 = operation = undefined;
        currentInput = '';
    })
}


populateDisplay();