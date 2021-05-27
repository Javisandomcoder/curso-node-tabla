const { describe } = require('yargs');

const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número';
                    }
                    return true;
                }).option('l',{
                    alias: 'list',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                }).option('h',{
                    alias: 'hasta',
                    type: 'number',
                    // demandOption: true,
                    default: 10,
                    describe: 'Indica hasta que número se multiplica la base'
                })
                .check((argv, options) => {
                    if(isNaN(argv.h)){
                        throw 'Tiene que ser un número';
                    }
                    return true;
                })
                .argv;

module.exports = argv;