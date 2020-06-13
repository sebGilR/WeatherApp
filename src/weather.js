const saveData = (data) => {
  if (data.cod === '400' || data.cod === '404') {
    localStorage.clear();
    return 'Weather not found for city provided';
  }
  const {
    main, name, sys, weather, wind,
  } = data;
  const filtered = {
    weather: weather[0].description,
    description: weather[0].main,
    name,
    temp: main.temp,
    flike: main.feels_like,
    humidity: main.humidity,
    country: sys.country,
    windSpeed: wind.speed,
    windDirection: wind.deg,
  };

  return localStorage.setItem('weather', JSON.stringify(filtered));
};

const getWeather = async (city, units, action) => {
  const base = 'http://api.openweathermap.org/data/2.5/weather';
  const key = '17bfcd723e4a10d65e366ef5bc79951f';
  const response = await fetch(`${base}?q=${city()}&APPID=${key}&units=${units()}`, { mode: 'cors' });
  saveData(await response.json());
  action();
};

export default getWeather;