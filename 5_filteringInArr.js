"use strict";

// Write a function that implements filtering in array.

function filterFalsyValues(arr) {
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			result.push(arr[i]);
		}
	}

	return result;
}

const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];

console.log(filterFalsyValues(values));              // [true, {}, { name: "Elon" }];
console.log(filterFalsyValues(["hello", 1233, []])); // ['hello', 1233, []]