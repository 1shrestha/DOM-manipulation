// Greeting function
document.getElementById("greetBtn").addEventListener("click", function () {
  let name = document.getElementById("nameInput").value;
  let greeting = document.getElementById("greeting");

  if (name.trim() !== "") {
    greeting.textContent = "Hello, " + name;
  } else {
    greeting.textContent = "Hello";
  }
});

// Box color change
let boxes = document.querySelectorAll(".box");

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    let color = box.getAttribute("data-color");
    box.style.backgroundColor = color;
  });
});