let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5061036&units=imperial&APPID=72df453963898aec74e5ae6d54739d93';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('current-temp').innerHTML = weatherData.main.temp;

    let icon = "http//openweathermap.org/img/w/" +
        weatherData.weather[0].icon + ".png";
    let desc = weatherData.weather[0].description;

    document.getElementById('current-img').setAttribute('src', icon);
    document.getElementById('current-img').setAttribute('alt', desc);
}