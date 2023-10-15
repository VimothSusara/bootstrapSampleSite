let button = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  scrollFunction();
});

window.scroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
