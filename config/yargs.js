const { argv } = require('yargs').options({
  location: {
    demand: true,
    alias: 'l',
    desc: 'Location of the place to receive the weather; "" for string'
  }
})

module.exports = { argv }
