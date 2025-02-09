const currentTemp = document.querySelector('#current-temp');
const currentCity = document.querySelector('#current-city');
const weatherIcon = document.querySelector('#weather-icon');
const url =
  'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F - ${
    data.weather[0].main
  }`;
  currentCity.innerHTML = data.name;
  const iconsrc = `http://maps.openweathermap.org/maps/2.0/weather`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
}

apiFetch();