let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');
navMain.classList.toggle('navigation--opened');
navMain.classList.toggle('navigation--closed');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('navigation--closed');
  navMain.classList.toggle('navigation--opened');
});
