const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para saber el clima',
        demand: true
    }
}).argv;


const obtenerInfo = async(direccion) => {
    try {
        console.log(direccion);
        const coords = await lugar.obtenerLugarLonLat(direccion);
        console.log(coords)
        const tiempo = await clima.obtenerClima(coords.lat, coords.lng);
        return `La temperatura en ${coords.sitio} es de ${tiempo.main.temp}° grados.`;
    } catch (e) {
        return `No se puedo determinar la temperatura en ${direccion}`
    }

}

obtenerInfo(argv.direccion).then(console.log).catch(console.log);