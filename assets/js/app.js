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

let firstOperand;
let secondOperand;
let operator;

let userInput;
// let result;

// Event Listeners
modifyClear.addEventListener("click", init);

operatorPlus.addEventListener("click", function() {
  userInput += "+";
  displayUserInput();
});

operatorMinus.addEventListener("click", function() {
  userInput += "-";
  displayUserInput();
});

operatorMultiply.addEventListener("click", function() {
  userInput += "*";
  displayUserInput();
});

operatorDivide.addEventListener("click", function() {
  userInput += "/";
  displayUserInput();
});

operatorEquals.addEventListener("click", function() {
  displayMain.textContent = eval(userInput);
  displayEquals.style.display = "block";
});

calculatorNumbers.forEach(function(num) {
  num.addEventListener("click", appendUserInput);
});

init();

// Functions
function appendUserInput() {
  userInput += this.textContent;
  displayUserInput();
}

function displayUserInput() {
  if (displayMain.textContent === 0) {
    displayMain.textContent = userInput;
  } else {
    displaySecondary.textContent = userInput;
  }
}

function init() {
  displayEquals.style.display = "none";
  displaySecondary.textContent = "";
  displayMain.textContent = "0";
  userInput = "";
}
