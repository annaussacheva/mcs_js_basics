console.log('You are at ' + window.location);

const button = document.querySelector('button');
const par = document.querySelector('p');

let state = 'none' //при первой загрузке страницы статус будет 'none'

button.addEventListener('click', function(){
	if(state == 'none') {
		par.style.display = 'block'; //если статус был 'none', параграф станет видимым
		state = 'block'; //при этом после открытия параграфа, статус страницы меняется на 'block', т.е. это условие больше не сработает
	} else {
		par.style.display = 'none';
		state = 'none'
	}
})