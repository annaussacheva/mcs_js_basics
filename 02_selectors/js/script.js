console.log('You are at ' + window.location);

const ByTag = document.getElementsByTagName('div');
const ByClass = document.getElementsByClassName('myClass');
const ById = document.getElementById('myId');

console.log(ByTag, ByClass, ById);

const allBySelector = document.querySelectorAll('.coolClass.mine');
const firstBySelector = document.querySelector('div');
console.log(allBySelector, firstBySelector);

const quest = prompt('как дела?')

ById.innerHTML = quest;
firstBySelector.innerHTML = '<h2>I am first with selector div</h2>'