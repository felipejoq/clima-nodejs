const argv = require('yargs').options({
    direccion : {
        alias: 'd',
        demand: true,
        desc: 'Nombre la ciudad para obtener el clima.'
    }
}).help().argv;

module.exports = {
    argv
}