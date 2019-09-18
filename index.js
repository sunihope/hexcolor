let colorCode = document.getElementById("colorcode");
let color = document.getElementById("color");
let error = document.querySelector('#error');

colorCode.addEventListener("change",displayColor);

function displayColor() {
  error.textContent="";
  let value1 = colorCode.value;
  if (value1.startsWith("#") && (value1.length === 7 || value1.length === 4)) {
    color.style.backgroundColor = value1;
    }
  else {
    error.textContent="Specify valid hex color code";
    error.style.color="#ff0000";
  }
}
