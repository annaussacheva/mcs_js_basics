const openPopup = document.querySelector('.request');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.closePopup')

openPopup.addEventListener('click', function() {
		popup.style.display = 'flex';
})
closePopup.addEventListener('click', function() {
	popup.style.display = 'none';
})

const openMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', function() {
	menu.style.left = 0;
	menu.style.transition = '.5s';
})
closeMenu.addEventListener('click', ()=>{menu.style.left = '-50vw'})
