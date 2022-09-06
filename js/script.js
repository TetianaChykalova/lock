//burger
let burgerLine = document.querySelector("#burger-line");
let burgerContent = document.querySelector("#burger-content");

burgerLine.addEventListener("click", function () {
    burgerContent.classList.toggle("active");
})