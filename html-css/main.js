let block = document.querySelectorAll(".block-lessons");
let sectBlock = document.querySelector(".block-section");
let show = document.querySelectorAll(".show-lesson");
let bigSection = document.querySelector(".main-big-section");
let close = document.querySelector(".close");

for (let i = 0; i < block.length; i++) {
  block[i].addEventListener("click", function (e) {
    e.stopPropagation();
    block[i].childNodes[3].style.visibility = "visible";
    show[i].classList.toggle("block-add");
    bigSection.classList.toggle("trans-color");
    sectBlock.classList.toggle("hide");
  });
}
