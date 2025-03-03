//Task 1: Custom Array Filter
function customFilter(arr, callback) {
  let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(num) {
  return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers); 

//Task 2: Countdown Timer
function countdown(start, callback) {
  callback(start);
    start > 0 && setTimeout(() => countdown(start - 1, callback), 1000);
}

function displayNumber(num) {
  console.log(num);
}

countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)

//Task 3: Simple Event Listener
function createButton(buttonText, callback) {
	let button = document.getElementById("button");
	button.addEventListener("click", callback);
}

function buttonClicked() {
  console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked); 

//Task 4: Task Runner
function runTasks(tasks) {
	tasks.forEach((task, index) => {
        setTimeout(task, index * 1000);
    });
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);  
