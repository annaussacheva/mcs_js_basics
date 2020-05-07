let a = prompt('сколько у вас с собой денег?')
let b = prompt('сколько яблок вы купили?')
let c = prompt('сколько батонов хлеба вы купили?')
let totalApple = b*prompt('сколько стоит одно яблоко?')
let totalBread = c*prompt('сколько стоит один батон хлеба?')
let result = a >= totalApple + totalBread
console.log(result)