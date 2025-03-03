// Task 1
let itemOne = 0;
let itemTwo = 2;
let itemThree = 9;
let totalCost = `The total cost of the items is: $${itemOne + itemTwo + itemThree}`;

console.log(totalCost);

| Step | Expression Evaluated               | Computation             | Result                  |
|------|-----------------------------------|-------------------------|-------------------------|
| 1    | `itemOne + itemTwo + itemThree`  | `0 + 2 + 9`             | `11`                    |
| 2    | `totalCost = \`The total cost of the items is: $${sum}\`` | `"The total cost of the items is: $11"` | `"The total cost of the items is: $11"` |
| 3    | `console.log(totalCost)`         | Output to console       | `"The total cost of the items is: $11"` |

// Task 2
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

// Task 3
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

| Input     | Function Call        | Result          |
|-----------|----------------------|----------------|
| "Alice"   | greet("Alice")       | "Hello, Alice!" |
| "Bob"     | greet("Bob")         | "Hello, Bob!"   |
| "Charlie" | greet("Charlie")     | "Hello, Charlie!" |

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

| Step | Input Array    | Action Performed          | Resulting Array |
|------|--------------|-------------------------|----------------|
| 1    | [10, 20, 30] | Start reversing process | []             |
| 2    | [10, 20, 30] | Push 30 to reversed     | [30]           |
| 3    | [10, 20, 30] | Push 20 to reversed     | [30, 20]       |
| 4    | [10, 20, 30] | Push 10 to reversed     | [30, 20, 10]   |

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
