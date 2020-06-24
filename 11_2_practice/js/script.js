let a = prompt('сколько у вас с собой денег?');
let b = prompt('сколько яблок вы купили?');
let c = prompt('сколько батонов хлеба вы купили?');
let totalApple = b*prompt('сколько стоит одно яблоко?');
let totalBread = c*prompt('сколько стоит один батон хлеба?');
let result = totalApple + totalBread;

let haveEnough = function(text) {
	if(a>=result) {
		console.log('Enough $$$');
	}
	else {
		console.log('Not enough $$$');
	}
}


haveEnough(totalApple, totalBread)