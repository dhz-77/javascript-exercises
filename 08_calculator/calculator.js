const add = function(...args) {
  let sum = 0;
	for (number of args) {
    sum += number;
  }
  return sum;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function([...args]) {
	let sum = 0;
	for (number of args) {
    sum += number;
  }
  return sum;
};

const multiply = function([...args]) {
  let product = 1;
	for (number of args) {
    product *= number;
  }
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {

  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
	
};

// see model solution for shorter functions

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
