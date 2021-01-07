const button = document.querySelector('.button');
const result = document.querySelector('span');






button.onclick = function(e) {
    e.preventDefault();

    const APIKey = 'cc535a65736cd079b52d6b4eb3de85e6';

    let city = document.forms[0].elements.city.value;

    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

    let xhr = new XMLHttpRequest;
    xhr.open('GET', url, false);
    xhr.send();

    if(xhr.status != 200){
    console.log(xhr.status + ' ' + xhr.statusText);
    } else {
        let DATA = JSON.parse(xhr.responseText);
        result.innerHTML = DATA.main.temp - 273;
}
}
