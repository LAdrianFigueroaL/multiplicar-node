const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listartabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];


switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(Archivo => console.log(`Archivo creado: ${ colors.green(Archivo)}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}