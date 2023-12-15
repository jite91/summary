// for the calculation
let calculation = localStorage.getItem("calculation") || "";
display();

function updateCalculation(value) {
  calculation += value;
  display();
  localStorage.setItem("calculation", calculation);
}

function display() {
  document.querySelector(".js-input").innerHTML = calculation;
}

// for the theme
const setTheme = (theme) => (document.documentElement.className = theme);
