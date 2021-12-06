"use strict";

// Write a function which remove elements with length <= 3.

function filterByLength(arr) {
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		if (typeof (arr[i]) === "string" && arr[i].length > 3) {
			result.push(arr[i]);
		}
	}

	return result;
}

console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"])); // ["tesla","mercedes"]