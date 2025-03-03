// Challenge 1
function generatePattern() {  
  let result = "";  
  for (let i = 1; i <= 3; i++) {  
    for (let j = 1; j <= i; j++) {  
      result += j + " ";  
    }  
    result += "\n";  
  }  
  return result;  
}  

console.log(generatePattern());

| Step | i (Row) | j (Number in Row) | result (Pattern) |
|------|--------|-------------------|------------------|
| 1    | 1      | 1                 | "1 "            |
| 2    | 1      | - (New Line)       | "1\n"           |
| 3    | 2      | 1                 | "1\n1 "         |
| 4    | 2      | 2                 | "1\n1 2 "       |
| 5    | 2      | - (New Line)       | "1\n1 2\n"      |
| 6    | 3      | 1                 | "1\n1 2\n1 "    |
| 7    | 3      | 2                 | "1\n1 2\n1 2 "  |
| 8    | 3      | 3                 | "1\n1 2\n1 2 3 "| 
| 9    | 3      | - (New Line)       | "1\n1 2\n1 2 3\n" |

MY PREDICTION OUTPUT:
1
1 2
1 2 3

ACTUAL OUTPUT:
1 
1 2 
1 2 3 

// Challenge 2
function swapFirstLast(arr) {  
  let first = arr.shift();  
  let last = arr.pop();  
  arr.unshift(last);  
  arr.push(first);  
  return arr;  
}  

let numbers = [10, 20, 30, 40];  
console.log(swapFirstLast(numbers));  
console.log(numbers);  

| Step | Array Before  | Operation Performed      | Array After     |
|------|--------------|-------------------------|----------------|
| 1    | [10, 20, 30, 40] | Shift (Remove 10)      | [20, 30, 40]  |
| 2    | [20, 30, 40] | Pop (Remove 40)         | [20, 30]      |
| 3    | [20, 30]     | Unshift (Add 40)        | [40, 20, 30]  |
| 4    | [40, 20, 30] | Push (Add 10)           | [40, 20, 30, 10] |

MY PREDICTION OUTPUT:
[40, 20, 30, 10]
[40, 20, 30, 10]
ACTUAL OUTPUT:
[40, 20, 30, 10]
[40, 20, 30, 10]

// Challenge 3
function filterPassingGrades(grades) {  
  let passing = [];  
  for (let grade of grades) {  
    if (grade >= 70) {  
      passing.push(grade);  
    } else {  
      passing.unshift(grade);  
    }  
  }  
  return passing;  
}  

let scores = [85, 45, 90, 60];  
console.log(filterPassingGrades(scores));  

| Step | Current Grade | Passing Array Before | Operation Performed | Passing Array After |
|------|--------------|----------------------|---------------------|---------------------|
| 1    | 85           | []                   | Add to end          | [85]                |
| 2    | 45           | [85]                 | Add to front        | [45, 85]            |
| 3    | 90           | [45, 85]             | Add to end          | [45, 85, 90]        |
| 4    | 60           | [45, 85, 90]         | Add to front        | [60, 45, 85, 90]    |

MY PREDICTION OUTPUT:
[60, 45, 85, 90]
ACTUAL OUTPUT:
[60, 45, 85, 90]

// Challenge 4
function updateStatus(tasks) {  
  for (let task of tasks) {  
    task.completed = !task.completed;  
  }  
  return tasks;  
}  

let taskList = [  
  { id: 1, completed: false },  
  { id: 2, completed: true }  
];  

console.log(updateStatus(taskList));  
console.log(taskList);

| Step | Task ID | Status Before | Operation Performed | Status After |
|------|--------|--------------|---------------------|--------------|
| 1    | 1      | false        | Toggle `false` → `true` | true         |
| 2    | 2      | true         | Toggle `true` → `false` | false        |

MY PREDICTION OUTPUT:
{ id: 1, completed: true },  
{ id: 2, completed: false } 
{ id: 1, completed: true },  
{ id: 2, completed: false } 
ACTUAL OUTPUT:
{ id: 1, completed: true },  
{ id: 2, completed: false } 
{ id: 1, completed: true },  
{ id: 2, completed: false }

// Challenge 5
function findValue(arr, target) {  
  for (let i = 0; i < arr.length; i++) {  
    if (arr[i] === target) {  
      return `Found at index ${i}`;  
    }  
  }  
  return "Not found";  
}  

let data = [5, 12, 8, 130, 44];  
console.log(findValue(data, 12));  
console.log(findValue(data, 100));

| Step | Index (i) | Current Value | Target (12) Found? | Target (100) Found? |
|------|----------|--------------|---------------------|----------------------|
| 1    | 0        | 5            | No                  | No                   |
| 2    | 1        | 12           | Yes (Return Index 1) | No                   |
| 3    | 2        | 8            | Skipped (already found 12) | No                |
| 4    | 3        | 130          | Skipped (already found 12) | No                |
| 5    | 4        | 44           | Skipped (already found 12) | No                |
| 6    | -        | -            | -                    | Not found (Return "Not found") |

MY PREDICTION OUTPUT:
Found at index 1
Not found
ACTUAL OUTPUT:
Found at index 1
Not found

