const axios = require('axios');

const getClima = async (lat, lng) => {
    let resp =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b35f40f222efcc420f73285d666f3d1e`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}