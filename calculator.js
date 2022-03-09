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
let previousOperation = "";
let total = 0;

function operate(operation) {

  let result = 0;

  console.table(operation);

  while (operation.length > 0) {

    let num1 = operation.shift();
    let operator = operation.shift();
    let num2 = operation.shift();

    switch (operator) {
      case "+":
        result = add(num1, num2);
        break;
      
      case "-":
        result = subtract(num1, num2);
        break;

      case "*":
        result = multiply(num1, num2);
        break;

      default:
        result = "Err: No Operator";
    }
  }  

  return result;
}

const currentNumberDisplay = document.querySelector("#currentDisplay")
const previousDisplay = document.querySelector('#previousDisplay');

function equalsButtonPressed() {
  currentOperation.push(parseInt(currentNumber));
  
  updateDisplay();

  let result = operate(currentOperation)

  currentNumberDisplay.textContent = result;
  previousDisplay.textContent = previousOperation;
  previousDisplay.textContent += " =";

  currentNumber = result;
}

function updateDisplay() {

  currentNumberDisplay.textContent = currentNumber;

  let previousDisplayValue = "";

  currentOperation.forEach(operation => {
    previousDisplayValue += operation;
    previousDisplayValue += " ";
  })

  previousDisplay.textContent = previousDisplayValue;
  previousOperation = previousDisplayValue;
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

    updateDisplay();
  })
})

// Equals button event listener
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', (e) => {

  equalsButtonPressed();

})