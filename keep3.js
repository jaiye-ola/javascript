// Control flow
// Conditional statement
// if
// ifelse
// switch

let age = 18;

if (age >= 18) {
  console.log("You can drive");
}


if (age !== 18) {
  console.log("You are not an adult");
} else {
  console.log("You are an adult");
}

let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}


if (5 !== 5) {
  console.log("true");
} else if (5 === "5"){
  console.log("Almost true");
} else if (5 == 6) {
  console.log("Not false");
} else {
  console.log("All of the above are false statements");
}



// if (condition) {
  
// } else if () {
  
// }

// Claswork
// 1. Use conditional statements to print out (fizzbuzz) if a particular number is divisible by 3 and 5, if just 3 (fizz), if by just 5 (buzz) else (not a good number).

// Classwork 1 Solution

let number = 45;

if (number % 5 === 0 && number % 3 === 0) {
  console.log("fizzbuzz");
} else if (number % 5 === 0 && number % 3 !== 0) {
  console.log("buzz");
} else if (number % 5 !== 0 && number % 3 === 0) {
  console.log("fizz");
} else {
  console.log("Not a good number");
}