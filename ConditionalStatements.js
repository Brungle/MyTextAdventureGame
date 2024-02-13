// CONDITIONAL STATEMENTS
// Conditional Statements are used to complete certain actions (AKA line(s) of code based on certain condition or conditions)

// IF
/*
Syntax Example

if (condition) {
CODE TO BE RUN GOES HERE
}
*/

console.log('IF STATEMENTS');

//  Code inside the brackets will run if the condition is true
//NOTE: remember to use parenthesis around the condition
if (true) { // condition is true so the code runs
    console.log('Yay the condition was true!!!');
}

if (false) { // condition is false so code does not run
    console.log('This will not run');
}

if ( 2 > 0) { // condition is 2 so code runs
    console.log('yes 2 is greater than 0');
}

// IF ELSE
/*
Syntax Example

if (condition) {
CODE TO BE RUN GOES HERE
} else {
    CODE TO BE RUN GOES HERE
}
*/

// Code in the ELSE brackets runs when the IF condition in the preceding IF statement and all preceding ELSE IF statements (Id there are any) are false
// Note: Also, when the IF condition is true the code in the IF brackets will run and the code in the ELSE brackets will not run
if (true) {
    console.log('The truth will set you free');
} else {
    console.log('You cant handle the truth');
}

// IF & ELSE IF
/*
Syntax Example

if (condition) {
CODE TO BE RUN GOES HERE
} else  if (condition) {
    CODE TO BE RUN GOES HERE
}
*/

// Code in ELSE IF brackets runs only if all previous conditions are not met
//NOTE WHile there can only be one IF, you can do as many ELSE IF's as you want
let number = 1
if (number === 5) {
    console.log('Number is 5');
} else if (number === 4) {
    console.log('Number is 4');
} else if (number < 4 ) {
    console.log('Number is less than 4');
} else if(number > 5) {
    console.log('number is bigger than 5');
}

// IF, ELSE IF, ELSE
/*
Syntax Example

if (condition) {
CODE TO BE RUN GOES HERE
} else  if (condition) {
    CODE TO BE RUN GOES HERE
} else (condition) {
    CODE TO BE RUN GOES HERE
}
*/

// Code in ELSE bracket will always run as long as the previous conditions are not met
// NOTE: ELSE does NOT have to have a condition set
let day = 'tuesday'
if (day === 'tuesday')  {
    console.log('today is tuesday');
} else if (day === 'wedensday') {
    console.log('today is wedensday');
} else {
    console.log('today is NOT tuesday');
}

