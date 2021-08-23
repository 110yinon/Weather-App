const form = document.querySelector('form');

const forecast = new Forecast();

const checkStorage = () => {

    if (localStorage.city) {

        forecast.updateCity(localStorage.city)
            .then(data => {
                // console.log(data);
                updateUI(data);
            })
            .catch(err => console.log('rejected:', err));
    }
};

checkStorage();

form.addEventListener('submit', e => {

    e.preventDefault();

    const city = e.target.location.value.trim();
    form.reset();

    forecast.updateCity(city)
        .then(data => {
            // console.log(data);
            updateUI(data);
        })
        .catch(err => console.log('rejected:', err));

    // stored the city in localStorage
    localStorage.setItem('city', city);
});
