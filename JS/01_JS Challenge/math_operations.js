// Task 1
let itemOne = 0;
let itemTwo = 2;
let itemThree = 9;
let totalCost = `The total cost of the items is: $${itemOne + itemTwo + itemThree}`;

console.log(totalCost);

// Task 2
let num1 = 1;
let num2 = 2;
let num3 = 3;
let averageNum = `The average is: ${(num1 + num2 + num3)/3}`

console.log(averageNum)

// Task 3
let num  = 15;

if(num % 2 === 0) {
    console.log (`${num} is an even number`)
} else {
    console.log (`${num} is an odd number`)
}

// Task 4
let originalPrice = 200
let discountPercentage = 20
let discountAmount = (originalPrice * discountPercentage)/100
let discountPrice = `The discounted price is: $${originalPrice - discountAmount}`

console.log(discountPrice)

// Bonus Task
let finalPrice = originalPrice - discountAmount

originalPrice = `The original price before the discount was: $${finalPrice / (1-discountPercentage/100)}`

console.log(originalPrice)
