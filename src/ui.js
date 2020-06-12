
const searchBox = document.getElementById('search');
const submitBtn = document.getElementById('submit');

const setListeners = (getWeather, city, units) => {
  submitBtn.addEventListener('click', () => {
    getWeather(city, units);
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
