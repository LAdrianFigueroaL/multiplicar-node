const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El Valor introducido ${base} no es un numero`.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.yellow)
        });

    });
}

let listartabla = (base, limite) => {

    console.log('==================='.green);
    console.log(`=====Table de ${base}====`.green);
    console.log('==================='.green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

}

module.exports = {
    crearArchivo,
    listartabla
}