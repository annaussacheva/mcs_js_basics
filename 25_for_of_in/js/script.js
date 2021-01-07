console.log('You are at ' + window.location);

const buttons = document.querySelectorAll('button');

for(button of buttons){
    console.log(button); //цикл обращается не к индексам, а прямо к содержимому массива по очереди
    button.style.backgroundColor = 'lightblue'; //кнопки окрасились по очереди в голубой
}

/*for(key in buttons){
    buttons[key].style.backgroundColor = 'lightblue';
}*/

let person = { // person - это объект, name, surname, student - это ключи объекта
    name: 'Anna',
    surname: 'Usacheva',
    student: true
}

for(key in person) {
    console.log(person[key]);
    console.log(key);
}
