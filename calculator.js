// Getting element
const numbers = document.getElementsByClassName('num');

// Making sure the button is working
for ( let i = 0; i < numbers.length; i++ ) {
    numbers[i].addEventListener('click', () => alert("Its workinggg"));    
}


// Creating the basic variables
let num1 = 1;
let num2 = 2;
let operation = '';

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
let operate = (oper, n1, n2) => {
    return (oper(n1, n2));
}

//console.log(operate(subtract, 1, 2));