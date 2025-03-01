// Inventory Tracker
let inventory = ["apple", "banana", "cherry", "date", "elderberry"];
let inventoryCount = [10, 15, 5, 20, 7];

for (let i = 0; i < inventory.length; i++) {
  console.log(`${inventory[i]}: ${inventoryCount[i]}`);
}

This script keeps track of items and their respective counts. It loops through the inventory array and prints each item along with its corresponding count from inventoryCount.

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
OUTPUT:
The sides 7, 10, and 5 form a valid triangle.