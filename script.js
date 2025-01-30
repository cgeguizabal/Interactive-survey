"strict";

const number = document.querySelectorAll(".number");
const scoreText = document.querySelector(".score");
const buttonSubmit = document.querySelector(".btn-submit");
const thanks = document.querySelector(".thanks-container");
const form = document.querySelector(".form-container");

console.log(number);
console.log(scoreText);

number.forEach((score) => {
  score.addEventListener("click", function () {
    number.forEach((num) => num.classList.remove("white"));
    score.classList.toggle("white");

    scoreText.textContent = score.textContent;
    console.log(scoreText.textContent);
  });
});

buttonSubmit.addEventListener("click", function () {
  if (scoreText.textContent === "0") {
    alert("Select a score");
  } else {
    form.style.visibility = "hidden";
    form.style.opacity = "0";

    thanks.style.visibility = "visible";
    thanks.style.opacity = "1";
  }
});

setInterval(() => {
  number.forEach((num) => num.classList.remove("white"));
  scoreText.textContent = "0";
  form.style.visibility = "visible";
  form.style.opacity = "1";

  thanks.style.visibility = "hidden";
  thanks.style.opacity = "0";
}, 5000);
