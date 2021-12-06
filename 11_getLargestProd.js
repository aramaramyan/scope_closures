"use strict";

/* Given an array of integers, find the pair of adjacent elements that has the largest product and return
	 that product. */

function getLargestProd(arr) {
	let result = 0;

	if (!Array.isArray(arr)) {
		return "The argument of function must be an array!"
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] * arr[i + 1] > result) {
			result = arr[i] * arr[i + 1];
		}
	}

	return result;
}

console.log(getLargestProd([1, 2, 3, 4, 5])); // 20
console.log(getLargestProd([3, 7, 9, 5, 8])); // 63