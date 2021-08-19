const form = document.querySelector('form');

const updateCity = async city => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    return { cityDets, weather };
};

form.addEventListener('submit', e => {

    e.preventDefault();

    const city = e.target.location.value.trim();
    form.reset();

    updateCity(city)
        .then(data => {
            // console.log(data);
            updateUI(data);
        })
        .catch(err => console.log('rejected:', err));

});
