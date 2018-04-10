const axios = require('axios');


const getWeather = async(lat, lng) => {

  let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5acc63a276cc387c4d2bf87f7c3a0c25`);

  let data = resp.data.main;

  return {
    temp: data.temp,
    temp_min: data.temp_min,
    temp_max: data.temp_max,
  }
}

module.exports = { getWeather }
