/*

3) Study new array api methods then create the following methodsand apply it on this array: 

var fruits = ["apple", "strawberry", "banana", "orange","mango"]

a. test that every element in the given array is a string
b.test that some of array elements starts with "a"
c.generatenew array filtered from the given array with onlyelements thatstarts with "b" or "s"
d.generatenew arrayeach element of the new array contains astring declaring that you like the give fruit elemente.
use forEach to display all elements of the new array frompreviouspoint

*/

const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

const isString = (currentEl) => typeof currentEl == "string";
const start_With_a = (currentEl) => currentEl[0] == "a";
const start_with_s_b = (currentEl) =>
  currentEl[0] == "s" || currentEl[0] == "b";

const mapped_to_text = (currentEl) => `I like ${currentEl}`;
const dsiplayElements = (currentEl) => `I like ${currentEl}`;

console.log(fruits.every(isString)); // true

console.log(fruits.some(start_With_a)); //true

console.log(fruits.filter(start_with_s_b)); //Array [ "strawberry", "banana" ]

console.log(fruits.map(mapped_to_text));

fruits.push("blueberry");

fruits.forEach((currentEl) => console.log(`I like ${currentEl}`));
