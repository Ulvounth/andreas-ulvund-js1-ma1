const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

let cat = {
  complain: function () {
    console.log("Meow!");
  },
};
cat.complain();

// Question 2

let heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.className = "Subheading";

// Question 5

let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6
