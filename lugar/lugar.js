const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodedUrl = encodeURI(direccion);

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
        
    if(respuesta.data.status === 'ZERO_RESULTS'){
        throw new Error (`No hay resultados para la ciudad ${direccion}`);
    }

    let localidad = respuesta.data.results[0];
    let coordenadas = localidad.geometry.location

    return {
        direccion: localidad.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}


module.exports = {
    getLugarLatLng
}

