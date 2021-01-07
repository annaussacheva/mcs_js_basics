console.log('You are at ' + window.location);

const divs = document.querySelectorAll('div');
console.log(divs);


for(let i = 0; i<divs.length; i++) { //i - это переменная-счетчик, счетчики часто называют i(итератор); далее - условие (пока i меньше длины divs; то инкрементировать i)
    divs[i].style.backgroundImage = 'linear-gradient('+(45+i*5)+'deg, lightblue, violet)' //работает, как в цикле while, первый раз он будет = 0 (потому что счетчик начинается с 0), второй = 1 итд.
    // '+(45+i*5)+'deg - градиент будет поворачиваться по часовой стрелке для каждого следующего div. первый раз - это 45+0, второй - i=1(45+5=50), третий - i=2(45+10=55)
}
