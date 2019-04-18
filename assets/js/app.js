// Variables
const displaySecondary = document.querySelector(
  ".js-calculator__display--secondary"
);
const displayMain = document.querySelector(".js-calculator__display--main");
const displayEquals = document.querySelector(".fas.fa-equals");
const modifyClear = document.querySelector(".js-modify-clear");
const modifyBack = document.querySelector(".js-modify-back");
const operatorPlus = document.querySelector(".js-operator--plus");
const operatorMinus = document.querySelector(".js-operator--minus");
const operatorMultiply = document.querySelector(".js-operator--multiply");
const operatorDivide = document.querySelector(".js-operator--divide");
const operatorEquals = document.querySelector(".js-operator--equals");
const calculatorNumbers = document.querySelectorAll(".button--number");

let userInput;

// Event Listeners
modifyClear.addEventListener("click", init);

modifyBack.addEventListener("click", function () {
  userInput = userInput.slice(0, userInput.length - 1);
  displayUserInput();
});

operatorPlus.addEventListener("click", function () {
  userInput += "+";
  displayUserInput();
});

operatorMinus.addEventListener("click", function () {
  userInput += "-";
  displayUserInput();
});

operatorMultiply.addEventListener("click", function () {
  userInput += "*";
  displayUserInput();
});

operatorDivide.addEventListener("click", function () {
  userInput += "/";
  displayUserInput();
});

operatorEquals.addEventListener("click", calculateInput);

calculatorNumbers.forEach(function (num) {
  num.addEventListener("click", function (e) {
    userInput += e.target.textContent;
    displayUserInput();
  });
});

document.addEventListener('keydown', function (e) {
  e.preventDefault();
  let keyPressed = e.key;
  switch (keyPressed) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "+":
    case "-":
    case "/":
    case "*":
      userInput += keyPressed;
      displayUserInput();
      break;
    case "Enter":
      calculateInput();
      break;
    case "Delete":
    case "Backspace":
      userInput = userInput.slice(0, userInput.length - 1);
      displayUserInput();
      break;
    case "Escape":
      init();
      break;
  }
})

init();

// Functions
function displayUserInput() {
  if (displayEquals.style.display === "none") {
    displayMain.textContent = userInput;
  } else {
    displaySecondary.textContent = userInput;
  }
}

function calculateInput() {
  displaySecondary.textContent = displayMain.textContent;
  displayMain.textContent = eval(userInput);
  displayEquals.style.display = "block";
}

function init() {
  displayEquals.style.display = "none";
  displaySecondary.textContent = "";
  userInput = "";
  displayMain.textContent = 0;
}
