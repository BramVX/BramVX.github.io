var myVar;

function loadFunction() {
  myVar = setTimeout(showDesktop, 3000000);
}

function showDesktop() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("desktop").style.display = "block";
}