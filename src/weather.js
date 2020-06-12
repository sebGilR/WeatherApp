const usefulData = (data) => {
  if (data.cod === '400' || data.cod === '404') {
    console.log('Weather not found for city provided');
  } else {
    console.log(data);
  }
};

const getWeather = async (city, units) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city()}&APPID=17bfcd723e4a10d65e366ef5bc79951f&units=${units()}`, { mode: 'cors' });
  usefulData(await response.json());
};

export default getWeather;