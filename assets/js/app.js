// Variables
const displaySecondary = document.querySelector(
  ".js-calculator__display--secondary"
);
const displayMain = document.querySelector(".js-calculator__display--main");
const displayEquals = document.querySelector(".fas.fa-equals");
const modifyClear = document.querySelector(".js-modify-clear");
const modifyBack = document.querySelector(".js-modify-back");
const operatorPlus = document.querySelector(".js-operator--plus");
const operatorMinus = document.querySelector(".js-operator--plus");
const operatorMultiply = document.querySelector(".js-operator--plus");
const operatorDivide = document.querySelector(".js-operator--plus");
const operatorEquals = document.querySelector(".js-operator--equals");
const calculatorNumbers = document.querySelectorAll(".button--number");

let userInput = 0;

// Functions
function appendUserInput() {
  userInput += this.textContent;
  displayUserInput();
}

function displayUserInput() {
  displayMain.textContent = userInput;
}

function init() {
  displayEquals.style.display = "none";
  displaySecondary.textContent = "";
  displayMain.textContent = "0";
  userInput = "";
}

// Event Listeners
modifyClear.addEventListener("click", init);

operatorPlus.addEventListener("click", function () {
  userInput += "+";
  displayUserInput();
});

operatorEquals.addEventListener("click", function () {
  displayMain.textContent = parseFloat(userInput);
});

calculatorNumbers.forEach(function (num) {
  num.addEventListener("click", appendUserInput);
});

init();
