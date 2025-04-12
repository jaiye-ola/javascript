// console.log("Hello world");
// console.warn("hello world")
// console.error("Hello world")

// alert("Hello world")



// variables
// varables are used to store data or acts as containers for storing data.


let newAge = "";

let firstName = "Timi";
// const FirstName = "";
firstName = "Divine";
console.log(firstName) 
// last_name lastName

const lastName = "Tofunmi";
console.log("Last Name", lastName);


const age = 100;
console.log(age);


// categories/groups of data types
// primitive 
// string e.g Alpha and alpha numeric value john1238 john 
// numbers  float and integers (0.1, 19, 8978, 1, 2, 3)
// boolean true false
// undefined value/identity not specified or known
// null a vacuum for an expected value

const className = "Peace23456";
console.log(className);
console.log(typeof className);

const isMarried = true;
console.log(isMarried);
console.log(typeof isMarried);

const quantity = 23.7;
console.log(quantity);
console.log(typeof quantity);


const score = undefined;
console.log(score);
console.log(typeof score);

const table = 50;
console.log(table);
console.log(typeof table);


const expectedValue = null;
console.log(expectedValue);
console.log(typeof expectedValue);

// reference
// arrays []  can have multiple data types
// objects consists of a pair of key and value {}
// functions are blocks of code that would not run unless being called ()
// a function inside of an object is called a method 

const fruits = ["apple", "orange", "grape", "banana"];
console.log(fruits)

const newSet = ["emmanuel", "rex", 12, 40.4, true, false, null, undefined];
console.log(newSet)

// objects
const person = {
  name: "Grace",
  age: 233,
  course: "SLT",
  hobbies: '"reading, "singing"'
}

console.log(person);
console.log(person.name);
console.log(person["name"]);

console.log(typeof person);

// functions
function runClassName () {
  console.log("Hello World");
}

runClassName()

const userName = () => {
  console.log("Hello Timi")
}

userName();

function FirstName(name) {
  console.log("Hello" + name) // concatenation
  console.log(`Hello $(name)`) // template literals
}

FirstName("Blessing");

function addition (x, y) {
  console.log(x + y);
}

addition(4, 3);


//create an array of people objects that must run when a function is being called

// 1

// const people = {
//   person1: "John",
//   person2: "Bola",
//   person3: "Sam",
//   person4: "Ola"
// }

// function callPeople(objectName) {
//   console.log(objectName);
// }

// callPeople(people);


// 2

const people = [{John: 10}, {Sam: 15}, {Tim: 10}]
  

function runPeople(arrayName) {
  console.log(arrayName)
}

runPeople(people);

