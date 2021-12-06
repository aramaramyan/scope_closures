"use strict";

// Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

function getSumOfEvenNumsQuad(arr) {

	let result = 0;

	if (!Array.isArray(arr)) {
		return "The argument of function must be an array!";
	}

	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2 === 0)) {
			result += arr[i] ** 2;
		}
	}

	return result;
}

console.log(getSumOfEvenNumsQuad([1, 2, 3, 4, 5, 6])); // 56