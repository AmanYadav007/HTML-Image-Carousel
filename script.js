"use strict";
let slideIndex = 1; //start point
showDivs(slideIndex); // calling function with argument of value slideIndex which is 1

function plusDivs(n) {
  showDivs((slideIndex += n)); // this function just add +1.
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides"); // this fetches all the image slide
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
