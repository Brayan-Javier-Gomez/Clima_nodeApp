const axios = require('axios');


const getLugarLatLong = async(direccion) => {

    const url = encodeURI(direccion);


    const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${url}.json?access_token=pk.eyJ1IjoiYnJheWFuMTk4NiIsImEiOiJja2pxYXR0bnYxNm1vMnFwZXlyZjByZDZ1In0.FDGSyVdysYBLBr82wAek4g`)
    if (resp.data.features.length === 0) {
        throw new Error(`no existe resultados para ${direccion}`);
    }

    const data = resp.data.features[0];
    const lugar = data.place_name
    const long = data.geometry.coordinates[0];
    const lat = data.geometry.coordinates[1];


    return {
        lugar,
        lat,
        long
    }
}


module.exports = {
    getLugarLatLong
}