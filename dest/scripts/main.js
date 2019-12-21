const burg = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav-list');

burg.addEventListener('click', (event) => {
	menu.classList.toggle('show');
})