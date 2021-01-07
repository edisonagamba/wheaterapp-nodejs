const axios = require('axios').default;

const obtenerLugarLonLat = async(lugar) => {

    const ciudad = encodeURI(lugar);
    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ciudad}.json`,
        params: { 'access_token': 'pk.eyJ1IjoiZWRpc29uanMiLCJhIjoiY2tnMG42Z25jMG80eTJyb2I0Z2t2ODd3aiJ9.ctCqGzgd_No-gdIKjQEOCw' }
    });

    const resp = await instance.get().then().catch();

    const ruta = resp.data.features[0];
    const sitio = ruta.place_name;
    const lat = ruta.center[1];
    const lng = ruta.center[0];

    return {
        sitio,
        lat,
        lng,
    }

}

module.exports = {
    obtenerLugarLonLat
}