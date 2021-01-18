

window.addEventListener('load', function(){
	class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
	//methods 
	hasCat() {
		return this.happiness++;
	}
	hasRest() {
		return this.happiness++;
	}
	hasMoney(){
		return this.happiness++;
	}
	isSunny() {
		const APIKey = 'cc535a65736cd079b52d6b4eb3de85e6';
		const city = 'Moscow';
		const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

		let xhr = new XMLHttpRequest();

		xhr.open('GET', url, false);
		xhr.send();
		let DATA = JSON.parse(xhr.responseText);
		let temp = (DATA.main.temp - 273);

		if(temp >= 15) {
			return this.happiness++;
		} else {
			return this.happiness;
		}
	}
}

const button = document.querySelector('.button');

button.onclick = function(e) {
	e.preventDefault();

	let name = document.forms[0].elements.name.value;
	let cat = document.forms[0].elements.cat.value;
	let rest = document.forms[0].elements.rest.value;
	let money = document.forms[0].elements.money.value;

	const User = new Person('name');

	if (cat == 'yes') {
		 User.hasCat();
	}
	if (rest == 'yes') {
		 User.hasRest();
	} 
	if (money == 'yes') {
         User.hasMoney();
    }

	User.isSunny();

	let insertName = document.querySelector('.personName');
	let insertIcon = document.querySelector('.icon');

	insertName.innerHTML = name;

	console.log(User.happiness);

	if(User.happiness === 4) {
		insertIcon.innerHTML = '😄';
	} else if (User.happiness === 2 || User.happiness === 3) {
		insertIcon.innerHTML = '😐';
	} else {
		insertIcon.innerHTML = '☹️';
	}
}
})





