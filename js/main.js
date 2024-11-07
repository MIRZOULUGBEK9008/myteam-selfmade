const elsPlus = document.querySelectorAll(".js-plus"),
  elsFront = document.querySelectorAll(".js-front"),
  elLoader = document.getElementById("loader");

// For loader 
window.onload = () => {
  elLoader.classList.add("loader-wrapper--none")
}

elsPlus.forEach(function (plus, index) {
  plus.addEventListener("click", function () {
    elsFront[index].classList.toggle(
      "team-members__info-front-wrapper--active"
    );
    plus.classList.toggle("plus--active");
  });
});
