const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Crea un elemento por hacer')
    .command('borrar', 'elimina un elemento ya ingresado', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}






// var colors = require('colors');


// let Crear = async(descripcion) => {
//     return `Crear un elemento por hacer`;
// }

// let Actualizar = async(descripcion, completado = true) => {
//     return `actualiza el estado completado de una tarea`;
// }