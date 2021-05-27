const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, limite)=>{
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= limite; i++) {
            salida += `${base} x ${i} = ${i * base}\n`;  
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${i * base}\n`;  
        }

        console.clear();
        if (listar) {
        console.log('========================='.green);
        console.log('   Tabla del:'.green , colors.yellow(base));
        console.log('========================='.green);
        console.log(consola);
        
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Tabla-${base}`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}