const axios = require('axios');


const getLocationLatLng = async (location) => {

  let encodedUrl = encodeURI(location);

  let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyC9Gub8ROtbpuf-vF3zmstGZ6ImD-uCn48`);
  
  if ( resp.data.status === 'ZERO_RESULTS' ) {
    throw new Error(`There are no results for the search: ${lugar}`);

  } else if ( resp.data.status === 'INVALID_REQUEST' ) {
    throw new Error('Missed entering the location');

  }

  let data  = resp.data.results[0];
  
  return {
    address: data.formatted_address,
    lat: data.geometry.location.lat,
    lng: data.geometry.location.lng
  }

}

module.exports = { getLocationLatLng }
