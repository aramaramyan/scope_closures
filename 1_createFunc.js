"use strict";

// Create a function that implements partial sum.

function sum(num1) {
	return function (num2) {
		return num1 + num2;
	}
}

console.log(sum(1)(2));  // 3
const addOne = sum(1);
console.log(addOne(2));  // 3
const addTen = sum(10);
console.log(addTen(2));  // 12
console.log(addOne(4));  // 5
console.log(addTen(10)); // 20