const { argv } = require('./config/yargs');
const { getLocationLatLng } = require('./location/location');
const { getWeather } = require('./weather/weather');


let getInfo = async (location) => {

  try {
    
    let coords = await getLocationLatLng(location);
    let weather = await getWeather(coords.lat, coords.lng);
  
    return `The weather on ${coords.address} is: ${weather.temp}`;

  } catch (error) {
    
    return `There are no results for the search: ${location}`;

  }

}

getInfo( argv.location )
.then( res => console.log(res))
.catch( err => console.log(err));
