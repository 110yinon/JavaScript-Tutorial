const cityForm = document.querySelector("form");

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e.target.location.value);// cityForm.location.value
    
    const city = e.target.location.value;
    cityForm.reset();

    getCity(city)
    .then(data => {
        return getWeather(data.Key)
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))

});

