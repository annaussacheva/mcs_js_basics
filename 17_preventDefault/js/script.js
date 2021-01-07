const form = document.querySelector('form');

form.onclick = function(e) {
	e.preventDefault();
	console.log('submitted');
}