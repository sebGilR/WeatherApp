
const searchBox = document.getElementById('search');
const submitBtn = document.getElementById('submit');
const locationP = document.getElementById('location');
const tempP = document.getElementById('temp');
const flikeP = document.getElementById('flike');
const weatherP = document.getElementById('weather');
const alertP = document.getElementById('alert');

const displayGif = (url) => {
  const img = document.getElementById('gif');
  img.src = url;
  img.classList.remove('hidden');
};

const getGif = async (weather) => {
  const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${weather}&limit=1&api_key=hZA0UJe9PBW5av8TZ6DSWJPnGAQ5XIdO`, { mode: 'cors' });
  const result = await response.json();
  if (result.cod !== '400' || result.cod !== '404') {
    displayGif(result.data[0].images.original.url);
  }
};

const showData = () => {
  if (localStorage.weather) {
    alertP.classList.add('hidden');
    const data = JSON.parse(localStorage.weather);
    getGif(data.weather);
    locationP.innerText = `Location: ${data.country}, ${data.name}`;
    weatherP.innerText = `Condition: ${data.description}`;
    tempP.innerText = `Temperature: ${data.temp}°`;
    flikeP.innerText = `Feeling like: ${data.flike}°`;
    flikeP.parentNode.classList.remove('hidden');
  } else {
    flikeP.parentNode.classList.add('hidden');
    alertP.innerText = 'Invalid City provided';
    alertP.classList.remove('hidden');
  }
};

const setListeners = (getWeather, city, units) => {
  submitBtn.addEventListener('click', () => {
    getWeather(city, units, showData);
  }, false);

  searchBox.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      return false;
    }
    return false;
  }, false);
};

const getCity = () => document.getElementById('search').value;
const getUnits = () => document.querySelector('input[name=units]:checked').value;

export {
  getCity,
  getUnits,
  setListeners,
};
