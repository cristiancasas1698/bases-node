const fs = require('fs')
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, hasta) => {

   try {
     // return new Promise((resolve, reject) =>{
    //     let salida = "";
    //     for (let index = 1; index <= 10; index++) {
    //         salida += "5 x " + index + " = " + (index * base) + "\n";
    //     }


    //     console.log(salida)

    //     fs.writeFileSync(`tabla_multiplicacion_${base}`, salida)
    //     resolve("archivo .txt creado")
    // });

    let salida,consola = "";
    
    for (let index = 1; index <= hasta; index++) {
        salida +=  base + " x " + index + " = "+ (index * base) + "\n";
        consola +=  base + " x ".green + index + " = ".green + (index * base) + "\n";
    }


   if (listar) {
    console.log('==========================='.green);
    console.log('      tabla del ' + colors.blue(base) )
    console.log('==========================='.green)

    console.log(consola)
   }

    fs.writeFileSync(`./salida/tabla_multiplicacion_${base}`, salida)
    return("archivo .txt creado")
   } catch (error) {
    throw error
   }
}

module.exports = {
    crearArchivo
}

