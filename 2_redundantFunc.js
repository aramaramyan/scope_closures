"use strict";

// Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
	const innerStr = str
	return function (innerStr) {
		return str;
	};
};

const f1 = redundant("apple"),
	f2 = redundant("pear"),
	f3 = redundant("");

console.log(f1());
console.log(f2());
console.log(f3());