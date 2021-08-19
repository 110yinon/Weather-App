const info = document.querySelector('.info');

const updateUI = data => {

    const { cityDets, weather } = data;
    
    // update city's weather details
    info.innerHTML = `
    <div class="daytime-pic"></div>
    <div class="symbol">
        <img src="img/icons/${weather.WeatherIcon}.svg">
    </div>
    <h3 class="loc-name">${cityDets.EnglishName}</h3>
    <p class="forecast">${weather.WeatherText}</p>
    <h2 class="temp">${weather.Temperature.Metric.Value} &deg;C</h2>
    `;

    // update the night/day & icon images
    const daytime = document.querySelector('.daytime-pic');
    if (weather.IsDayTime) {
        daytime.innerHTML = '<img src="img/day.svg">';
    }
    else {
        daytime.innerHTML = '<img src="img/night.svg">';
    }

    info.style.display = 'block';

};


