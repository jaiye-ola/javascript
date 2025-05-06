// ES6 OOP (Object Oriented Programming)

// Pillars of OOP
// Polymorphism
// Abstraction
// Inheritance //
// Encapsulation


class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const user1 = new User("Tofunmi", "Emmanuel", 56);
console.log(user1);


class Profile extends User {// inheritance
  constructor(firstName, lastName, age, membership, gender) {
    super(firstName, lastName, age) 
      this.membership = membership;
      this.gender = gender;
      
  }
}

const profile1 = new Profile("Tofunmi", "Emmanuel", 56);
console.log("profile", profile1);
profile1.calcAge();//abstraction
profile1.cangeName("grace");
// 