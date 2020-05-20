console.log('You are at ' + window.location);

const Colored = document.querySelector('.colored');
console.log(Colored);

console.log(Colored.style);

let quest = prompt('What color?');
//Colored.style.backgroundColor = 'orange';
Colored.style['background-color'] = quest;