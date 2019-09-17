let colorCode = document.getElementById("colorcode");
let color = document.getElementById("color");
let button = document.getElementById("button");
button.addEventListener("click", function() {
  let value1 = colorCode.value;
  if (value1.startsWith("#") && (value1.length === 7 || value1.length === 4)) {
    color.style.backgroundColor = value1;
    }
  else alert("Input valid color code");
});
