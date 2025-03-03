// Exercise 1: Writing Your First Callback Function
function calculate(num1, num2, operation) {
  return operation(num1, num2);
}

function subtract(a, b){
  return a - b;
}

function divide(a, b){
  return a / b;
}

console.log(calculate(5, 3, subtract));
console.log(calculate(6, 2, divide));

// Exercise 2: Using Callbacks with setTimeout
function delayedMessage(message1, message2, delay, callback) {
  setTimeout(() => {
      callback(message1), callback(message2);
  }, delay);
}

delayedMessage("Hello, world!", "I am Emyl", 2000, function(msg) {
  console.log(msg);
});

// Exercise 3: Looping with Callbacks
function repeatTask(times, callback) {
  for (let i = 0; i < times; i++) {
    if(callback(i) === false){
      break;
    }
}
}

repeatTask(5, function(index) {
console.log("Iteration:", index);
if (index === 2) return false;
});