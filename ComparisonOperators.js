// COMPARISON OPERATORS
// Comparison Operators are used to return  true or false boolean value when comparing two values

// Greater than (Ex: >)
console.log(3>1); // True
console.log(1<3); // False

// Less than (Ex: <)
console.log(3<1); // false
console.log(1<3); // true

// Greater than or equal to(Ex: >=)
console.log(3>=3); // true
console.log(3>=5); // false
console.log(3>=2); // true

// Greater than or equal to(Ex: >=)
console.log(3<=3); // true
console.log(3<=2); // false
console.log(3<=5); // true

// EQUAL COMPARISONS
// Double Equals (Ex:==)
//Checks if the characters (AKA Face Value) are the same
// For a false value to be returned, cant be equal
console.log(3 == 3); // true
console.log(3 == 2); // false
console.log(3 == "3"); // true
console.log("Hello" == "Hello"); // true
console.log("Hello" == "Hi"); // false
console.log("Hello" == "hello"); // false

let hi = "hello"
console.log(hi == "hi"); // false
console.log(hi == "hello");

console.log(true == "true"); // false (face value rule does not apply)

// TRIPLE EQUAL (AKA Strict equals or strict equality (Ex: ===)

console.log(3 === 3); // true
console.log(3 === "3"); // false
console.log("hello" === 'hello'); // true (both are string datatypes)

// NOT EQUAL COMPARISONS
// Not Equal (Ex !=)
// Check to see if characters (AKA Face Value) of the two values are NOT equal to eachother
console.log(3 != 3); // false
console.log(3 != 2); // true
console.log("Hello" != "hello"); // true
console.log(3 != "3"); // false

// Strice Not Equal (Ex: !==)
console.log(3 !== 3); // false
console.log(3 !== "3"); // true
console.log("Hello" !== 'Hello'); // false