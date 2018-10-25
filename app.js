const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfoClima = async (direccion) => {
    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima en ${coordenadas.direccion} es de ${temperatura} grados celcius`;
    } catch (e) {
        return `Ocurrió un error ${e}`;
    }
}

getInfoClima(argv.direccion).then(info => console.log(info)).catch(e => console.log(e));