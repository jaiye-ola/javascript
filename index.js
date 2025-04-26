// More on objects

const person = {
  name: "Oladipupo",
  age: 78,
  is_student: true,
  greet: function (name) {
    console.log(`Hello ${name}`)
  }
}

console.log(person);
person.greet("grace");


// Factory functions - used to create multiple objects
function createPerson (name, age, height, fav_dish) {
  return {
    name: name,
    age: age,
    height: height,
    dish: fav_dish,
    greet: () => {
      console.log(`Hello ${name}`)
    }
  }
}

const person1 = createPerson("Divine", 34, "5'9", "Pounded Yam");
person1.greet();
console.log("Divine object", person1);



// Constructor functions - used for promises


function Person (firstName, lastName, age, dob, state) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.dob = dob;
  this.state = state;
  this.changeLastName = (newLastName) => {
    this.lastName = newLastName;
  }
}

const person2 = new Person("Grace", "Ogbonna", 545, "12-12-2012", "Ondo");
const person3 = new Person("Tofunmi", "Gabriel", 545, "12-12-2012", "Ondo");
person3.changeLastName("Sodiya");
console.log("person 2", person2);
console.log("person 3", person3);

// Cloning objects
const clone = { ...person };
console.log("clone", clone);

const assign = Object.assign({}, person)
console.log(assign);

const strings = new String("Hello World");
const numbers = new  Number(12);
console.log(typeof numbers);
console.log(strings);

// String objects
const value = "Hello, world";
const text = " kelechi";

console.log(value.length);
console.log(value.charAt(2));
console.log(value.concat(text));
console.log(value.indexOf("l"));
console.log(value.lastIndexOf("l"));
console.log(value.slice(0, 5));
console.log(value.substring(0, 5));
console.log(value.toLowerCase(0, 5));
console.log(value.toUpperCase(0, 5));
console.log(value.trim());
console.log(value.split(','));
console.log(value.replace("world", "emmanuel"));
console.log(value.startsWith("w"));
console.log(value.endsWith("d"));

// Date objects
const currentDate = new Date();
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getDate());
console.log(currentDate.getMinutes());
console.log(currentDate.getHours());
console.log(currentDate.toLocaleDateString());
console.log(currentDate);


const setDate = new Date("2022-12-12");
console.log(setDate.setFullYear("2026"));
console.log(setDate.setMonth("3"));
console.log(setDate.setDate("2"));
// console.log(setDate);

// comparing date
console.log(currentDate > setDate);