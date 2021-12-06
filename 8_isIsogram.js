"use strict";

/* Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a
	 word or phrase without a repeating letter. */

function isIsogram(str) {
	if (typeof (str) !== "string") {
		return "The argument of function must be a string!";
	}

	return (new Set(str.split("")).size === str.length) ? true : false;
}

console.log(isIsogram("background")); // true
console.log(isIsogram("hello"))       // false