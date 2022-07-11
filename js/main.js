const elsPlus = document.querySelectorAll('.js-plus'),
elsFront = document.querySelectorAll('.js-front');


elsPlus.forEach(function (plus, index) {
  plus.addEventListener('click', function () {
    elsFront[index].classList.toggle('team-members__info-front-wrapper--active');
    plus.classList.toggle('plus--active');
  });
});