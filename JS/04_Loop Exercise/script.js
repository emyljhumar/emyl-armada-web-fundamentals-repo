// Task 1
let num = 5;

for(let i=0; i < 10; i++){
    console.log (`${num} x ${i+1} = ${num * (i+1)}`)
}

// Task 2
let n = 5;
let sum = 0;

for(let i=0; i <= n; i++){
    sum += i
}

console.log(`The sum of the first ${n} numbers is: ${sum}`)

// Task 3
let array = [1,2,3,4,5]

for(let i=0; i < array.length; i++){
    console.log(`Array Element: ${array[i]}`)
}

// Task 4
for(let row = 1; row <= 5; row++){
    let output = "";
    for(let col = 1; col <= row; col++){
        output += "*"
    }
    console.log(output)
}

// Task 5
let arrayReverse = [1,2,3,4,5]

for(let i = arrayReverse.length - 1; i >= 0; i--){
    console.log(`Reversed Element: ${arrayReverse[i]}`)
}