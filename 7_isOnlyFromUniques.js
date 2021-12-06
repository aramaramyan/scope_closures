"use strict";

// Given an array. Determine whether it consists only from uniques or not.

function isOnlyFromUniques(arr) {
	return (new Set(arr).size === arr.length) ? true : false;
}

console.log(isOnlyFromUniques([1, 2, 3]));    // true
console.log(isOnlyFromUniques([1, 2, 3, 3])); // false