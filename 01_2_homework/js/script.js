let a = prompt('сколько у вас с собой денег?');
let b = prompt('сколько яблок вы купили?');
let c = prompt('сколько батонов хлеба вы купили?');
let totalApple = b*prompt('сколько стоит одно яблоко?');
let totalBread = c*prompt('сколько стоит один батон хлеба?');
let result = a >= totalApple + totalBread;

let haveEnough = function(a, b, c, totalApple, totalBread, result) {
	console.log(result) = true = 'Вам хватает денег на покупки';
	console.log(result) = false = 'Вам не хватает денег на покупки';
}


console.log(result);