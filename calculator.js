const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total = total + nums[i];
  }

  return total;
};

const multiply = function(num1, num2) {

  return num1 * num2; 
};

const power = function(num1, num2) {
  let total = num1;

  for (let i = 1; i < num2; i++) {
    total = total * num1;
  }

  return total;
};

const factorial = function(num) {

  let total = 1;

  for (let i = num; i > 1; i--) {
    total = total * i;
  }

  return total;
};

let currentNumber = '';
let currentOperation = [];
let previousOperations = []; // This is what you last added
let total = 0;

function operate(operations) {

  let result = 0;

  console.table(operations);

  while (operations.length > 0) {

    let num1 = operations.shift();
    let operator = operations.shift();
    let num2 = operations.shift();

    console.log("Operator: " + operator)

    switch (operator) {
      case "add":
        result = add(num1, num2);
        break;
      
      case "minus":
        result = subtract(num1, num2);
        break;

      case "multiply":
        result = multiply(num1, num2);
        break;

      default:
        result = "no operator";
    }
  }  

  return result;
}

const currentNumberDisplay = document.querySelector("#currentDisplay")
const previousDisplay = document.querySelector('#previousDisplay');

function updateDisplay() {
  console.log("update display");
  currentNumberDisplay.textContent = currentNumber;
  previousDisplay.textContent = currentOperation;
}

// Number button event listeners
const numberButtons = document.getElementsByClassName("numberButton");
const numberButtonsArray = Array.from(numberButtons);

numberButtonsArray.forEach((button) => {
  button.addEventListener('click', (e) => {
    
    const number = e.target.id;
    currentNumber += number;

    updateDisplay();
  })
})

// Operator button event listeners
const operatorButtons = document.getElementsByClassName("operatorButton");
const operatorButtonsArray = Array.from(operatorButtons);

operatorButtonsArray.forEach((button) => {
  button.addEventListener('click', (e) => {
    
    const symbol = e.target.id;

    currentOperation.push(parseInt(currentNumber));
    currentNumber = '';

    currentOperation.push(symbol);
  })
})

// Equals button event listener
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', (e) => {

  currentOperation.push(parseInt(currentNumber));

  updateDisplay();
  console.log(operate(currentOperation));
  currentNumber = '';
  currentOperation = [];
})

// currentOperation.push(1);
// currentOperation.push(1);
// currentOperation.push("add");
// currentOperation.push(1);

// allOperations.push(currentOperation);
// currentOperation = [];

// currentOperation.push(2);
// currentOperation.push("add");
// currentOperation.push(2);

// allOperations.push(currentOperation);

// console.table(allOperations);

// console.log(operate(allOperations));