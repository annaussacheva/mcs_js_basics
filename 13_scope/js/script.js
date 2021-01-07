console.log('You are at ' + window.location);

var a = 'hi';

function myFanc() {
	a = 'hello';
	return a;
}

console.log(a);

function myFanc2() {
	var b = 3;
	console.log(b)
}

myFanc2()

if(true) {
	var c = 5;
	let d = 7;
}

console.log(c);
console.log(d) // ошибка