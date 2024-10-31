// Getting element
const element = document.querySelectorAll('.num');
const display = document.querySelector('.ans');
const clr = document.querySelector('.clr');
const equals = document.querySelector('.eq');

// Creating the basic variables
let num1, num2, operation;
let currentInput = '';

// Creating basic math operation functions
let add = (n1, n2) => {
    return n1 + n2;
}

let subtract = (n1, n2) => {
    return n1 - n2;
}

let multiply = (n1, n2) => {
    return n1 * n2;
}

let divide = (n1, n2) => {
    return n1 / n2;
}

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
    //let selectedBtn;
    for ( let i = 0; i < element.length; i++ ) {
        element[i].addEventListener('click', () => {
            if (selectedCount < 3) {
                // if (selectedCount == 0) {
                //     // Entering a number
                //     currentInput += element[i].value; // Creating a number and not making it apart of the number count even if it is more than one digit
                //     num1 = parseFloat(currentInput);
                //     display.innerHTML = num1;
                //     currentInput = ''; // Reseting current input for next number;
                //     selectedCount++;
                // } 
                // else if (selectedCount == 1) {
                //     display.innerHTML += element[i].value;
                //     operation += element[i].value;
                //     selectedCount++;
                // }
                // else if (selectedCount == 2) {
                //     currentInput += element[i].value; // Creating a number and not making it apart of the number count even if it is more than one digit
                //     num2 = parseFloat(currentInput);
                //     display.innerHTML += num2;
                // }

                // if (selectedCount === 0) {
                //     num1 = parseFloat(currentInput);
                //     currentInput = ''; // Reseting current input for next number;
                //     selectedCount++;
                // }
                // else if (selectedCount === 2) {
                //     num2 = parseFloat(currentInput);
                // }

                // My solution
                if (selectedCount == 0) {
                    currentInput += element[i].value;
                    display.innerHTML = currentInput;
                    num1 = parseFloat(currentInput);
                    currentInput = ''
                    selectedCount++;
                } 
                else if (selectedCount == 1) {
                    display.innerHTML += element[i].value
                    operation = element[i].value;
                    selectedCount++;
                } 
                else if (selectedCount == 2) {
                    currentInput += element[i].value;
                    display.innerHTML += parseFloat(currentInput);
                    num2 = parseFloat(currentInput);
                    currentInput = '';         
                } 
                
            }
        });  
    }

    equals.addEventListener('click', () => {
        const result = operate(num1, operation, num2);
        display.innerHTML = result;
        selectedCount = 0;
        num1 = num2 = operation = undefined;
    })

    clr.addEventListener('click', () => {
        display.innerHTML = '0';
        selectedCount = 0;
        num1 = num2 = operation = undefined;
    })
}



populateDisplay();
//console.log(num1, operation, num2)

//To-Do
// - When the = is selected, let it display the answer only without the numbers selected