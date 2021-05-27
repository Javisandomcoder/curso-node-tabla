const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')



// const base = 7;

console.clear()

// console.log(argv);

// console.log('base: yargs', argv.b);


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creada por hermione'.random))
    .catch(err => console.log(colors.red(err)));

