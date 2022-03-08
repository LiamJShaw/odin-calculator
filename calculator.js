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
  
  let total = 1;
  
  for (let i = 0; i < nums.length; i++) {
    total = total * nums[i];
  }

  return total; 
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

let operands = [];
let operators = [];

function operate(operandArray, operatorArray) {

  let result = 0;

  while (operandArray.length > 0) {
    let num1 = operandArray.pop();
    let num2 = operandArray.pop();
    let operator = operatorArray.pop();

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

    return result;

  }  
}

// Number button event listeners
const numberButtons = document.getElementsByClassName("numberButton");
const numberButtonsArray = Array.from(numberButtons);

numberButtonsArray.forEach((button) => {
  button.addEventListener('click', (e) => {
    
    const number = e.target.id;
    console.log(number);

    operands.push(number);
  })
})

// Operator button event listeners
const operatorButtons = document.getElementsByClassName("operatorButton");
const operatorButtonsArray = Array.from(operatorButtons);

operatorButtonsArray.forEach((button) => {
  button.addEventListener('click', (e) => {
    
    const symbol = e.target.id;
    console.log(symbol);

    operators.push(symbol);
  })
})

// Equals button event listener
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', (e) => {

  console.log(operate(operands, operators));
})

operands.push(1);
operands.push(1);
operators.push("add");

console.log(operate(operands, operators));