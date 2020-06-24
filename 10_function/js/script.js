console.log('You are at ' + window.location);

function sayHi() {
	return 'Hello';
}

document.body.innerHTML = sayHi();
//console.log(sayHi());

function sayName(name) {
	return 'Hello '+ name;
}

console.log(sayName('Anna'));