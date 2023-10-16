const argv = require('yargs')
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: "es la base de la multiplicacion"
}).option('l',{
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: "muestra la tabla la consola"
}).option('h',{
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    default: 10,
    describe: "este el limite de la multiplicacion"
})
.check((argv, options) =>{
    if (isNaN(argv.base)) {
        throw "la base tiene que ser un numero"
    }
   return true
}).argv

module.exports = argv;
