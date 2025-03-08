// // Task 1
// function customMap(arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//       result.push(callback(arr[i], i, arr));
//   }
//   return result;
// }

// let numbers = [2, 4, 6];
// let doubled = customMap(numbers, function(num) { return num * 2; });
// console.log(doubled); // Should output: [2,4,6]

// // Task 2
// function filter(arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//       if (callback(arr[i], i, arr)) {
//           result.push(arr[i]);
//       }
//   }
//   return result;
// }


// let result = filter([1,2,3,4,15], function(val) { return val<10; });
// console.log(result); // Should output: [1,2,3,4]

// // Task 3
// function some(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//       if (callback(arr[i], i, arr)) {
//           return true;
//       }
//   }
//   return false;
// }

// let result = some([1,2,3,4], function(val) { return val>5; });
// console.log(result); // Should output: false

// //Task 4
// function every(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//       if (!callback(arr[i], i, arr)) {
//           return false;
//       }
//   }
//   return true;
// }

// let result = every([1,2,3], function(val) { return val>0; });
// console.log(result); // Should output: true

// // Task 5
// function reduce(arr, callback, initialValue) {
//   let accumulator = initialValue !== undefined ? initialValue : arr[0];
//   let startIndex = initialValue !== undefined ? 0 : 1;

//   for (let i = startIndex; i < arr.length; i++) {
//       accumulator = callback(accumulator, arr[i], i, arr);
//   }
//   return accumulator;
// }

// let sum = reduce([1,2,3], function(acc, num) { return acc + num; });
// console.log(sum); // Should output: 6

// // Task 6
// function includes(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//       if (callback(arr[i], i, arr)) {
//           return true;
//       }
//   }
//   return false;
// }

// let result = includes([1,2,3], function(val) { return val===2; });
// console.log(result); // Should output: true

