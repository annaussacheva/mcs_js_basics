console.log('You are at '+window.location);

let myFunc = function(element, color) {
	element.style.backgroundColor = color;
}

const heading = document.querySelector('h1');
const paragraph = document.querySelector('p')

myFunc(heading, 'red');
myFunc(paragraph, 'green');