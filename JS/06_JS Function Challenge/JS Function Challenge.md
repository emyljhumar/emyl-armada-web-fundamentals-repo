// Task 1
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let numbers = [1, 2, 3, 4];
console.log("Sum:", calculateSum(numbers));

| Step | Current Number | Sum Before | Sum After |
|------|---------------|------------|-----------|
| 1    | 1             | 0          | 1         |
| 2    | 2             | 1          | 3         |
| 3    | 3             | 3          | 6         |
| 4    | 4             | 6          | 10        |

MY PREDICTION OUTPUT: Sum: 10
ACTUAL OUTPUT: Sum: 10

//Task 2
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(0));

| Input | Condition (num % 2 === 0) | Result |
|-------|---------------------------|--------|
| 4     | 4 % 2 === 0 → true        | true   |
| 7     | 7 % 2 === 0 → false       | false  |
| 0     | 0 % 2 === 0 → true        | true   |

MY PREDICTION OUTPUT:
true
false
true
ACTUAL OUTPUT:
true
false
true

//Task 3
function greet(name) {
  return "Hello, " + name + "!";
}

function personalizedGreeting(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(greet(names[i]));
  }
}

let friends = ["Alice", "Bob", "Charlie"];
personalizedGreeting(friends);

| Step | Input Name | Function Call   | Output           |
|------|-----------|----------------|------------------|
| 1    | "Alice"   | greet("Alice")  | "Hello, Alice!"  |
| 2    | "Bob"     | greet("Bob")    | "Hello, Bob!"    |
| 3    | "Charlie" | greet("Charlie")| "Hello, Charlie!"|

MY PREDICTION OUTPUT:
Hello, Alice!
Hello, Bob!
Hello, Charlie!
ACTUAL OUTPUT:
Hello, Alice!
Hello, Bob!
Hello, Charlie!

// Task 4
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

let originalArray = [10, 20, 30];
console.log(reverseArray(originalArray));
console.log(originalArray);

| Step | Original Array | Action Performed  | Reversed Array |
|------|---------------|------------------|---------------|
| 1    | [10, 20, 30]  | Push 30 to new array | [30]          |
| 2    | [10, 20, 30]  | Push 20 to new array | [30, 20]      |
| 3    | [10, 20, 30]  | Push 10 to new array | [30, 20, 10]  |

MY PREDICTION OUTPUT:
reversed = [30, 20, 10]
originalArray = [10, 20, 30]
Actual output:
[30, 20, 10]
[10, 20, 30]

// Task 5
function multiplyMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] *= 2;
    }
  }
  return matrix;
}

let matrix = [
  [1, 2],
  [3, 4],
];
console.log(multiplyMatrix(matrix));

| Step | Matrix Before | Operation Performed | Matrix After  |
|------|--------------|--------------------|--------------|
| 1    | [[1, 2], [3, 4]] | Multiply 1 × 2 | [[2, 2], [3, 4]] |
| 2    | [[2, 2], [3, 4]] | Multiply 2 × 2 | [[2, 4], [3, 4]] |
| 3    | [[2, 4], [3, 4]] | Multiply 3 × 2 | [[2, 4], [6, 4]] |
| 4    | [[2, 4], [6, 4]] | Multiply 4 × 2 | [[2, 4], [6, 8]] |

MY PREDICTION OUTPUT:
[2, 4]
[6, 8]
ACTUAL OUTPUT:
[2, 4]
[6, 8]
