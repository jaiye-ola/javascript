// Asynchronous Javascript - run a function while another is still running
// Problems it solves non-blocking, efficiency, responsiveness

// methods
// callbacks, promises, async/await

// Callback method

function runCallBack (value, callback) {
  setTimeout(() => {
    console.log("Hello world")
    callback(value)
  }, 3000);
}

function callBack(value) {
  setTimeout(() => {
    console.log(value)
  }, 3000);
}

// runCallBack("John", callBack);

const bookList = {
  id: 1,
  name: "Advanced JavaScript",
  author: "Tofunmi Sodiya"
}

console.log("Shelf: ", bookList);

function addBook(value, callback) {
  setTimeout(() => {
    // bookList.push(value);
    console.log("Running");
    callBack(value);
  }, 7000);
}

function newShelf() {
  setTimeout(() => {
    console.log("New Shelf", bookList)
  }, 5000);
}

addBook({id: 2, name: "Advanced HTML", author: "Grace", newShelf})

// Promises

function runPromise () {
  const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if(error) {
        resolve("Hello")
        console.log("Resolved")
      } else {
        reject("Rejected")
        console.log("Rejected")
      }
      resolve;
    }, 50000);
  })
  return promise
}

runPromise()
  .then(data => console.log(data, "Success"))
  .catch(error => console.log(error, "Something went wrong"))

function runAddPromise () {
  const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if(error) {
        bookList.push(value)
        resolve()
      } else {
        reject("Rejected")
        console.log("Rejected")
      }
      resolve;
    }, 50000);
  })
  return promise
}

function displayList() {
  setTimeout(() => {
    console.log("Book List:", bookList)
  }, 3000);
}

runAddPromise({id: 2, name: "Advanced HTML", author: "Grace", newShelf}, displayList)
    .then(displayList())
    .catch(error => console.log("Something went wrong"))

// displayList()

// async and await method  

async function runAsyncAddBookList(value) {
  const response = new Promise((resolve, reject) => {
    bookList.push(value)
    resolve()
  })

  const data = await response;
  return data;
}

function displayList2() {
  setTimeout(() => {
    console.log("Book List 2:", bookList)
  }, 3000);
}

runAsyncAddBookList({id: 2, name: "Advanced HTML", author: "Grace", newShelf}, displayList2)
    .then(displayList2())
    .catch(error => console.log("Something went wrong"))


// JSON is how we get out response from API

const person = {
  name: "John Doe",
  age: 56
}

const stringify = JSON.stringify(person);
console.log(person);

const parseObject = JSON.parse(stringify);
console.log(parseObject);
console.log(person);

// Communicate to the server using the fetch API
// txt file
// json file
// fetch from json placeholder

// get text from txt file 

document.querySelector("#json").addEventListener("click", function() {
  fetch("db.json")
    .then(res => {
      if (res.ok) {
        return res.text()
      }
    } )
    .then(data => {
      let value;

      data.map(items => 
        value += `
                <li>${items.name}</li>
                <li>${items.email}</li>
                <li>${items.location}</li>
                <li>${items.address}</li>
        ` )

      document.querySelector("#result").innerHTML = data;
    })
    .catch(error => {
      document.querySelector("#result").innerHTML = error;
    })
})