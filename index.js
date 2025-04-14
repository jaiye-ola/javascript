// Control flow
// Conditional statement
// if
// ifelse
// switch

let dayOfWeek = 8;

switch(dayOfWeek) {
  case 1:
    console.log("Sunday")
    break;
  case 2:
    console.log("Monday")
    break;
  case 3:
    console.log("Tuesday")
    break;
  case 4:
    console.log("It's the weekend")
    break;
}

// For loop
// For initialization; condition; iteration
//   // execution

// 

for (let index = 3; index <= 10; index++) {
  console.log("Counting: ", index);

}
const numbers = [1,2,3,4,5,6,7,8,9];

for (let index = 0; index < numbers.length; index++) {
  const element = numbers.index;
  console.log(element);
}

let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  sum += numbers.index;  
}
console.log("Sum: ", sum);

for (let index = 10; index >= 1; index--) {
  console.log("Index", index);
}

for (let x = 2; x < 5; x++) {
  for (let y = 1; y < 3; y++) {
    console.log("X: ", x, "Y: ", y);
    
  }
}

for (let index = 1; index < 9; index++) {
  if (index === 5) {
    continue;
  }
  console.log("Index: ", index);
}

for (let index = 1; index < 9; index++) {
  if (index === 5) {
    break;
  }
  console.log("Index: ", index);
}

// while loop
let index = 0;
while (index < 10) {
  console.log("While index: ", index);
  index++;
}

// while loop
// let num = 5;
// while (num > 0) {
//   console.log("While index: ", num);
//   num--;
// }

// let indexx = 0;

// while (indexx < numbers.length) {
//   sum += numbers[indexx];
//   console.log(indexx);
//   indexx++;
// }

// // console.log("Sum: ", sum);

// let number = 10;
// let values = 0;

// do {
  // console.log("numbers", indexx);
// } while (values < number);


const person = {
  name: "James",
  age: 150,
  isStudent: true
}

for (const key in person) {
  // console.log("Key: ", person[key]);
  for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
      const element = person[key];
      console.log(element);
    }
  }
}

for (const element of numbers) {
  console.log(element)  
}

const words = "Hello world";

for (const items of words) {
  console.log(items)
}

for (const element of Object.values(person)) {
  console.log(element);
}


