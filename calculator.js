// Getting element
const element = document.querySelectorAll('.num');
const display = document.querySelector('.ans');
const clr = document.querySelector('.clr');
const equals = document.querySelector('.eq');

// Creating the basic variables
let num1, num2, operation;

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
                if (selectedCount == 0) {
                    display.innerHTML = element[i].value
                    num1 = parseFloat(element[i].value);
                } 
                else if (selectedCount == 1) {
                    display.innerHTML += element[i].value
                    operation = element[i].value;
                } 
                else if (selectedCount == 2) {
                    display.innerHTML += element[i].value
                    num2 = parseFloat(element[i].value);

                                       
                } 
                selectedCount++;
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