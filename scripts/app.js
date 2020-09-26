const cityForm = document.querySelector("form");
const info = document.querySelector(".info");
const img = document.querySelector(".image");

const updateUI = ({ cityDetails, weather }) => {

    // update datails template
    info.innerHTML = `
        <img class="icon" src=""/>
        <h3 class="location">${cityDetails.LocalizedName}</h3>
        <h5 class="description">${weather.WeatherText}</h5>
        <h1 class="temp">${weather.Temperature.Metric.Value} &deg;C</h1>
    `;
    
    // update the night/day & icon images
    const icon = document.querySelector(".icon");
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = 'img/day.svg';
    }
    else {
        timeSrc = 'img/night.svg';
    }
    img.setAttribute('src', timeSrc);

    // remove the d-none class if present in info-section div
    if (info.parentElement.classList.contains('d-none')) {
        info.parentElement.classList.remove('d-none');
    }

};

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return { cityDetails, weather };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e.target.location.value);// cityForm.location.value

    const city = e.target.location.value;
    cityForm.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
});

