console.log('You are at ' + window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt('Сколько тебе лет?')
answer = parseInt(answer);

if (answer<18) {
	Image.style.backgroundImage = 'url(img/cat.jpg)';
} else if (answer<=30) {
	Image.style.backgroundImage = 'url(img/monkey.jpg)';
} else if (answer<=60) {
	Image.style.backgroundImage = 'url(img/dog.jpg)';
} else {
	Image.style.backgroundImage = 'url(img/fox.jpg)'
}