// More on functions

function Hello() {
  console.log("Hello world");
}

Hello();

function addNumber(x, y) {
  console.log(x + y);
}

addNumber(3, 7);

const studentName = (name) => {
  console.log("Hello", name);
}

studentName("Emmanuel");

function students(...args) {
  console.log(args);
}

students("John", "James");

// spread operator copies instance of object while rest operator stores arguments in an array

let total = 0;

function sumNumbers(...params) {
  for (let index = 0; index < params.length; index++) {
      total += params[index];
      console.log(total);
  }
}

sumNumbers(2, 3, 4, 5, 6);

console.log(total);


// Block scope - declared witin curly braces using curly braces e.g for. They are declared using let


// example
const _students = [];
console.log("students", _students);


// function addStudents(id, name, age, color) {
//   _students.push(
//     id,
//     name,
//     age,
//     color
//   )
// }

function addStudents(obj) {
  _students.push(obj);
}

addStudents({id: 1, name: "John", age: 24, color: "yellow"});
addStudents({id: 2, name: "Divine", age: 50, color: "yellow"});
addStudents({id: 3, name: "Grace", age: 50, color: "yellow"});
addStudents({id: 4, name: "Timi", age: 50, color: "yellow"});

console.log("Students:", _students);

function removeStudents(id) {
  const findStudent = _students.findIndex(item => item.id === id) 
    if (findStudent !== -1) {
      _students.splice(findStudent, 1);
      console.log("Removed student");
    } else {
      console.log("Students does not exist");
    }
}

removeStudents(2)
console.log("Students", _students);

function updateStudents(id, name, age, color) {
  const findStudent = _students.findIndex(item => item.id === id) 
    if (findStudent !== -1) {
      _students[name] = name;
      _students[age] = age;
      _students[color] = color;
      console.log("Updated students");
    } else {
      console.log("Students does not exist");      
    }
}

updateStudents(1, "Mark", 24, "yellow");
// console.log(_students);


//Do the same for books with author, title of books,

//Stopped at while for