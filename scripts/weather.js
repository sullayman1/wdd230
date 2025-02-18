const currentTemp = document.querySelector('#current-temp');
const currentCity = document.querySelector('#current-city');
const weatherIcon = document.querySelector('#weather-icon');
const weatherMap = document.querySelector('#weather-map');

const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const lat = 8.4606; // Latitude for Sierra Leone
const lon = -11.7799; // Longitude for Sierra Leone

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const mapUrl = `http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}?appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(weatherUrl);
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
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F - ${data.weather[0].main}`;
  currentCity.innerHTML = data.name;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  // Add weather map layer
  const mapSrc = `http://maps.openweathermap.org/maps/2.0/weather/PA0/${lat}/${lon}/6?appid=${apiKey}`;
  weatherMap.setAttribute('src', mapSrc);
  weatherMap.setAttribute('alt', 'Weather Map');
}

apiFetch();