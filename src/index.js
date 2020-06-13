import './style.scss';
import {
  getCity,
  getUnits,
  setListeners,
} from './ui';

import getWeather from './weather';

setListeners(getWeather, getCity, getUnits);
