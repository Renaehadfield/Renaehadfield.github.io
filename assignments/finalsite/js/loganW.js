let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=84323,us&units=imperial&APPID=72df453963898aec74e5ae6d54739d93';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
   

    document.getElementById('currentL').innerHTML = weatherData.weather[0].main;
    document.getElementById('tL').innerHTML = weatherData.main.temp_max;
    document.getElementById('precipL').innerHTML = weatherData.main.humidity;
    document.getElementById('sL').innerHTML = weatherData.wind.speed;
    displayWindChill();
    
}