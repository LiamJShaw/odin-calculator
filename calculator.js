const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  total = 0;

  for (let i = 0; i < nums.length; i++) {
    total = total + nums[i];
  }

  return total;

};

const multiply = function(nums) {
  
  total = 1;
  
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