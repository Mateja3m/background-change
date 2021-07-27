// Selecting elements
const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const colors = ["green", "yellow", "purple", "pink"];

btn.addEventListener("click", function changeColor() {
  const colorIndex = parseInt(Math.random() * colors.length + 1);
  body.style.backgroundColor = colors[colorIndex];
});
