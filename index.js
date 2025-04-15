// DOM (Document Object Manipulation)
// DOM in Javascript refers to your HTML file


let value;

value = document; // document is the html file
value = document.all[0];
value = document.all[5];
value = document.body;
// value.style.backgroundColor="red";
console.log(value);

//traversing the DOM

const header = document.getElementsByTagName("h1");
const headerClass = document.getElementsByClassName("kelechi");
const headerId = document.getElementById("timi");

console.log(header);
console.log(headerClass);
console.log(headerId);

const header1 = document.querySelector("h1");
const header1Class = document.querySelector(".kelechi");
const header1Id = document.querySelector("#timi");
const list = document.querySelectorAll("li");




list.forEach(items => {
  items.style.backgroundColor = "blue";
});

const btn = document.querySelector("button");
const input = document.querySelector(".inputItem")

// btn.addEventListener("click", eventRunner);
// btn.addEventListener("dblclick", eventRunner);
// btn.addEventListener("mouseover", eventRunner);
// btn.addEventListener("mouseout", eventRunner);
// btn.addEventListener("mouseleave", eventRunner);
// btn.addEventListener("mousemove", eventRunner);

// input.addEventListener("keypress", eventRunner);
// input.addEventListener("copy", eventRunner);
// input.addEventListener("paste", eventRunner);
// input.addEventListener("input", eventRunner);
// input.addEventListener("change", eventRunner);
// input.addEventListener("focus", eventRunner);
input.addEventListener("blur", eventRunner);

function eventRunner (e) {
  e.preventDefault();
  document.body.style.backgroundColor = `rgba($(e.offsetX), $(e.offsetY), 0)`;
  console.log("clicked");
  console.log(e);
  console.log(e.target.value);
  console.log(`Event, $(e.type)`);
}