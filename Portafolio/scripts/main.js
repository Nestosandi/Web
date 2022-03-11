const menu = document.getElementById('barrita')

menu.addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("active");
});

menu.addEventListener("click", function () {
  document.getElementById("texto").classList.toggle("active");
});