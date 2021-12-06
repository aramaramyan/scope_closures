"use strict";

// Create a function printAfter that calls its argument after printing hello world.

function printAfter(func) {
	console.log("hello world")
	func();
}

const print = () => console.log("Elon Musk");

printAfter(print); // hello world
                   // Elon Musk