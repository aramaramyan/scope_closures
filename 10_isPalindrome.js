"use strict";

// Check whether string is palindrome, or not.

function isPalindrome(str) {
	if (typeof (str) !== "string") {
		return "The argument of function must be string!";
	}

	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - ++i]) {
			return false;
		}
	}

	return true;
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("word"));  // false