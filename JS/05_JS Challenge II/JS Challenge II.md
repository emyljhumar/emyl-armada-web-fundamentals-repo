// Inventory Tracker
let inventory = ["apple", "banana", "cherry", "date", "elderberry"];
let inventoryCount = [10, 15, 5, 20, 7];

for (let i = 0; i < inventory.length; i++) {
  console.log(`${inventory[i]}: ${inventoryCount[i]}`);
}

This script keeps track of items and their respective counts. It loops through the inventory array and prints each item along with its corresponding count from inventoryCount.
| i  | inventory[i] | inventoryCount[i] | Console Output     |
|----|-------------|-------------------|--------------------|
| 0  | apple       | 10                | apple: 10         |
| 1  | banana      | 15                | banana: 15        |
| 2  | cherry      | 5                 | cherry: 5         |
| 3  | date        | 20                | date: 20          |
| 4  | elderberry  | 7                 | elderberry: 7     |

OUTPUT:
apple: 10
banana: 15
cherry: 5
date: 20
elderberry: 7

// Alphabetical Sorting
let words = ["zebra", "apple", "mango", "cherry", "banana"];

for (let i = 0; i < words.length; i++) {
  for (let j = i + 1; j < words.length; j++) {
    if (words[i] > words[j]) {
      let temp = words[i];
      words[i] = words[j];
      words[j] = temp;
    }
  }
}

console.log(words);

This script sorts an array of words in ascending alphabetical order using a basic bubble sort approach.
Sorting Steps:
	1.	Compares and swaps elements if needed to move smaller words forward.
	2.	Continues sorting until all words are in alphabetical order.

| Pass | i  | j  | words[i]  | words[j]  | Swap? | Array After Swap                                |
|------|----|----|----------|----------|-------|---------------------------------------------------|
| 1    | 0  | 1  | zebra    | apple    | ✅    | `["apple", "zebra", "mango", "cherry", "banana"]` |
| 1    | 0  | 2  | apple    | mango    | ❌    | No change                                         |
| 1    | 0  | 3  | apple    | cherry   | ❌    | No change                                         |
| 1    | 0  | 4  | apple    | banana   | ❌    | No change                                         |
| 2    | 1  | 2  | zebra    | mango    | ✅    | `["apple", "mango", "zebra", "cherry", "banana"]` |
| 2    | 1  | 3  | mango    | cherry   | ✅    | `["apple", "cherry", "zebra", "mango", "banana"]` |
| 2    | 1  | 4  | cherry   | banana   | ✅    | `["apple", "banana", "zebra", "mango", "cherry"]` |
| 3    | 2  | 3  | zebra    | mango    | ✅    | `["apple", "banana", "mango", "zebra", "cherry"]` |
| 3    | 2  | 4  | mango    | cherry   | ✅    | `["apple", "banana", "cherry", "zebra", "mango"]` |
| 4    | 3  | 4  | zebra    | mango    | ✅    | `["apple", "banana", "cherry", "mango", "zebra"]` |

OUTPUT:
['apple', 'banana', 'cherry', 'mango', 'zebra']

// Unique Array Builder
let uniqueNumbers = [];

while (uniqueNumbers.length < 10) {
  let randomNumber = Math.floor(Math.random() * 20) + 1;

  // Check if the randomNumber already exists in the array
  let exists = false;
  for (let i = 0; i < uniqueNumbers.length; i++) {
    if (uniqueNumbers[i] === randomNumber) {
      exists = true;
      break;
    }
  }

  // If it doesn't exist, add it to the array
  if (!exists) {
    uniqueNumbers.push(randomNumber);
  }
}

console.log(uniqueNumbers);

This script generates 10 unique random numbers between 1 and 20.
	•	Uses Math.random() to generate a random number.
	•	Makes sure the number is unique and not repeating by checking it before placing it in the array.

| Step | Random Number | Exists in `uniqueNumbers`? | Action Taken             | `uniqueNumbers` After Step        |
|------|--------------|---------------------------|--------------------------|-----------------------------------|
| 1    | 4           | ❌ No                      | Add to array             | `[4]`                             |
| 2    | 6           | ❌ No                      | Add to array             | `[4, 6]`                          |
| 3    | 15          | ❌ No                      | Add to array             | `[4, 6, 15]`                      |
| 4    | 11          | ❌ No                      | Add to array             | `[4, 6, 15, 11]`                  |
| 5    | 12          | ❌ No                      | Add to array             | `[4, 6, 15, 11, 12]`              |
| 6    | 19          | ❌ No                      | Add to array             | `[4, 6, 15, 11, 12, 19]`          |
| 7    | 9           | ❌ No                      | Add to array             | `[4, 6, 15, 11, 12, 19, 9]`       |
| 8    | 5           | ❌ No                      | Add to array             | `[4, 6, 15, 11, 12, 19, 9, 5]`    |
| 9    | 2           | ❌ No                      | Add to array             | `[4, 6, 15, 11, 12, 19, 9, 5, 2]` |
| 10   | 8           | ❌ No                      | Add to array             | `[4, 6, 15, 11, 12, 19, 9, 5, 2, 8]` |


OUTPUT:
[4, 6, 15, 11, 12, 19, 9, 5, 2, 8]

// Triangle Checker
let sideA = 7;
let sideB = 10;
let sideC = 5;

if (sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB) {
  console.log(`The sides ${sideA}, ${sideB}, and ${sideC} form a valid triangle.`);
} else {
  console.log(`The sides ${sideA}, ${sideB}, and ${sideC} do not form a valid triangle.`);
}

Check if the sum of any two sides must be greater than the third side.

| Step | Condition Checked              | Computation        | Result | Condition Met? |
|------|--------------------------------|--------------------|--------|---------------|
| 1    | `sideA + sideB > sideC`        | `7 + 10 > 5`      | `17 > 5`  | ✅ Yes        |
| 2    | `sideB + sideC > sideA`        | `10 + 5 > 7`      | `15 > 7`  | ✅ Yes        |
| 3    | `sideA + sideC > sideB`        | `7 + 5 > 10`      | `12 > 10` | ✅ Yes        |

OUTPUT:
The sides 7, 10, and 5 form a valid triangle.