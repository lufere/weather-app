async function getWeather(){
    let location = document.querySelector("#searchLocation").value;
    let weatherLink = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=b5341e8677ff722f7333a4dad69ef5e3&units=metric"
    let weatherData = await fetch(weatherLink);
    let weather = await weatherData.json();
    console.table(weather.main.temp);
}

searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener('click', getWeather);