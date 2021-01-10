const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');




const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para recibir la informacion del clima',
        demand: true
    }
}).argv;





// lugar.getLugarLatLong(argv.direccion)
//     .then(console.log)

// clima.getClima(6.555, -73.13361)
//     .then(console.log)
//     .catch(console.log)


const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coord.lat, coord.long);
        return `La temperatura actual de ${direccion} es de ${temp}ºC`
    } catch (e) {
        return `No se pudo determinar la informacion metereologica de ${direccion}`
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)