// operators in js
// Arithmetic operators
// Comparison operators
// Assignment operators
// Logical operators


// Arithmetic operators
// iteration is performing a particular task as long as a specified condition is met

let value;
value = 2 + 2;
value = 8 - 2;
value = 2 * 6;
value = 8 / 2;
value = 8 % 3;
value = 2 ** 3;
value++;
value--;
console.log("Arithmetic: ", value);

let result = 2;

result += 2;
result -= 2;
result *= 2;
result /= 2;
result %= 2;
result ** 2;
// result++

// Comparison operators
// equal -- ==
// strictly equal -- ===
// greater than -- >
// greater than or equal to -- >=
// lesser than -- <
// lesser than or equal to -- <=


console.log("Comparison", 5 == 5);
console.log(5 == "5"); // checks for only value
console.log(5 === "5"); // checks for value and data type
console.log(10 >= 10); 
console.log(10 <= 10); 

// Ternary operators for writing comparison operators

// condition ? statement when true : statement when false 

const isStudent = true;
const student = isStudent ? "You are a student": "You are not a student";
console.log(student);

const age = 19;
const canDrive = age > 18 ? "You can drive": "You cannot drive";
console.log(canDrive);

// Logical operator
// NOT ! -- makes a statement to change from true to false
// AND && -- you need both statemtns to be true to make a true statement
// T + T = T
// T + F = F 
// F + T = F 
// F + F = F 

// OR || - you need at least one of the statements to be true to make a true statement
// T + T = T
// T + F = T
// F + T = T
// F + F = F

console.log( 5 == 5 || 5 > 5);
console.log( 5 === "5" || 5 > 5);
console.log( 10 > 7 && 5 > 4);
console.log( 10 > 7 && 5 < 4);
console.log( 10 > 7 && 5 < 4 || 5 === "5");
console.log( 10 > 7 || 5 < 4 || 5 === "5" && 5 == 5 && 5 == "5");


// class work
// calculate the area and perimeter of a rectangle 
// using the knowledge from javascript operators
// write a condition that checks if a user has drivers license and is above 18 to be able to drive
// write a conditional statement that knows when 2 numbers are divisible by 2 and 3 with the remainder of zero


// CLASSWORK 1
let length = 10;
let breadth = 5;

let area = length * breadth;
let perimeter = 2 * (length + breadth);
console.log("Area: ", area);
console.log("Perimeter: ", perimeter);


// CLASSWORK 2
let personAge = 19;
let ownsLicense = true;
const eligible = personAge > 18 && ownsLicense ? "You are eligible to drive": "You are not eligible to drive";
console.log(eligible);


// CLASSWORK 3
let number = 30;
const checkNumber = number % 2 == 0 && number % 3 == 0 ? "The number is divisible by 2 and 3": "The number is not divisible by 2 and 3";
console.log(checkNumber);

