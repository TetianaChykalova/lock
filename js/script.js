//burger
let burgerLine = document.querySelector("#burger-line");
// console.log(burgerLine);
let burgerContent = document.querySelector("#burger-content");
// console.log(burgerContent);

burgerLine.addEventListener("click", function () {
    burgerContent.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
})