const {crearArchivo} =  require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();
console.log(argv)
// console.log("base: yargs", argv.base)
// const base = 8;
crearArchivo(argv.b, argv.l, argv.h)
.then(nombrearchivo => console.log(nombrearchivo.rainbow, " creado"))
.catch(err => console.log(err))

 

// const [,,arg3 = 'base=5'] =  process.argv
// const [, base = 5] = arg3.split('=')
// console.log(base) 





// console.log(process.argv)
