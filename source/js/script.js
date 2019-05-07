var pageHeader = document.querySelector('.page-header');
var dealersMap = document.querySelector('.dealers__map');
var menuWrapper = document.querySelector('.page-header__menu-wrapper');
var navToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--no-js');
dealersMap.classList.remove('dealers__map--no-js');

navToggle.addEventListener('click', function() {
  if (menuWrapper.classList.contains('page-header__menu-wrapper--closed')) {
    menuWrapper.classList.remove('page-header__menu-wrapper--closed');
    menuWrapper.classList.add('page-header__menu-wrapper--opened');
  } else {
    menuWrapper.classList.add('page-header__menu-wrapper--closed');
    menuWrapper.classList.remove('page-header__menu-wrapper--opened');
  }
});
