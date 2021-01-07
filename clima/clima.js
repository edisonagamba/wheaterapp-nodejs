const axios = require('axios').default;
const obtenerClima = async(lat, lng) => {

    const apikey = 'd4c9b85676c0735c24a038ca095ead83';
    let unidades = 'metric';
    const clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}&units=${unidades}`);
    return clima.data;
}
module.exports = {
    obtenerClima
}