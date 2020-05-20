console.log('You are at ' + window.location);

let N = prompt('Введите число');
N = parseInt(N);

if (N>=0) {
	console.log(N);
} else if (N<0) {
	console.log(-N);
}