// Endpoints are methods that have been prebuilt to perform a function
// Quotes in JS use single quotes while in JSOn use double quotes 

// More on Arrays

const students = [
  "Tofunmi",
  "Grace",
  "Emmanuel",
  "Oladipupo",
  "Pauline",
  "Divine",
  "Kelechi",
  "Rex",
  "Marvellous",
  "Nelson",
  "Peace",
  "Blessing"
];

// console.log(typeof students);
console.log("Students: ", students);
console.log(students[4]);
console.log(students.length);
students[9] = "Ben"; 

console.log(students.push("Timi"));
console.log(students.pop());
console.log(students.unshift("Peace"));
console.log(students.shift());

students.splice(9, 2);
students.splice(9, 2, "Timi");

/*
  pillars of oop
  -methods

*/


students.forEach(element => {
  console.log(element);
});

students.map((item) => {
  console.log(item);
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 34, 77, 6567, 56];

const filteredNumbers = numbers.filter(num => num % 2 == 0);
console.log("Filtered numbers: ", filteredNumbers);

// Classwork
// Filter by 3 and 2 with a remainder of 1

// const filteredNumbers = numbers.filter(num => num % 2 == 1 && num % 3 == 1);
// console.log("Filtered numbers: ", filteredNumbers);

// const reduceNum = numbers.reduce((accumulator, currentValue) => {
//   accumulator + currentValue
// }, 0);



// console.log("Reduced value: ", reduceNum);

const reduceNum = numbers.reduce((accumulator, currentValue) => 
    accumulator + currentValue
, 0)

console.log("Reduced num: ", reduceNum);

const avg = reduceNum / numbers.length;
console.log("Average: ", Math.round(avg));

const someNum = numbers.some(num => num % 2 == 0);
console.log("findNum: ", someNum);

const everyNum = numbers.every(num => num % 2 == 0);
console.log("everyNum: ", everyNum);

const sortNum = numbers.sort();
console.log("Sorted Numbers: ", sortNum);

const sortStud = students.sort();
console.log("Sorted Students: ", sortStud);

const reverseNum = numbers.reverse();
console.log("Reversed numbers: ", reverseNum);

const includesNum = numbers.includes(10);
console.log("Includes 10: ", includesNum);
