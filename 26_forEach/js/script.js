console.log('You are at ' + window.location);

const button = document.querySelector('button');
const lorems = document.querySelectorAll('p');

button.onclick = () => { //стрелочная функция, тк не важен контекст
    lorems.forEach(function(lorem){ //здесь тоже можно использовать стрелочную функцию ((lorem) => {})
        lorem.style.fontSize = '30px';
    })
}
