const APIKey = 'cc535a65736cd079b52d6b4eb3de85e6';
const city = 'Rotterdam';
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();

if(xhr.status != 200){
    console.log(xhr.status + ' ' + xhr.statusText);
} else {
    var DATA = JSON.parse(xhr.responseText);
    console.log(DATA);
    document.write(DATA.main.temp - 273); //-273, чтобы получить по цельсию
}


