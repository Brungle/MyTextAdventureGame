// LOGICAL OPERATORS
// Logical Operators are used to return a true or false boolean values based off of two boolean values

// AND (Ex: &&)
// The AND logical operator checks if both values are true, if not it will always be false

// Exampme 1
let andOne = true && false
console.log(andOne); // false

// Example 2
let andTwo = 5 < 6 && 10 >= 10
// let andTwo = true && true
console.log(andTwo); // true

// Example 3
let andThree = "Hello!".length === 6 && 10 === "10"
//let andThree = True && False
console.log(andThree); // false

// Example 4
let andFour = 2 > -10 && "Hi" !== "hi" && 2 != "2"
// let andFour True && True && False
// let andFour True && False
// let andFour False
console.log(andFour); // false

// OR (Ex: ||)
// Shift + Backslash for pipe character (|)
// The or operator will feturn false if both are false, but will return true if atleast one is true
// Example 1
let orOne = true || false
console.log(orOne); // true

// Example 2
let orTwo = 1 > 2 ||"Jam" == "Jelly"
// let orTwo = false || false
console.log(orTwo); // false

// Example 3
let orThree = 'Two' == 2 || "one".length == 1 || false === false
// let orThree = false|| false || true
console.log(orThree); // true

// Example 4
let orFour = "Five".length === 4 || 'Hot Dog' === 'Sandwich'
// let orFour = true || false
console.log(orFour); // true

// Order of Operations (AND before OR)
let orderOne = "False" === 'False' || "True" === 'True' && 5 == "five".length
// let orderOne = True || False && False
// let orderOne = True || False
// let orderOne = True

console.log(orderOne); // true

// NOT (Ex: !)
// The NOT logical operators converts the value from true to false, and vice versa
// Example 1
let notOne = !true
console.log(notOne); // false

// Example 2
let notTwo = !("Chuck Norris".length >= "John Wick".length)
console.log(notTwo); // false

// AND, OR as well as NOT

console.log(true || !true && true); // true
