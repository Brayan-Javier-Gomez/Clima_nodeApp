const axios = require('axios');
const lugar = require('../lugar/lugar');


const getClima = async(lat, long) => {

    const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=abbba33d705d6446de4e210257505ebf&units=metric`)


    return data.data.main.temp
}

module.exports = {
    getClima
}