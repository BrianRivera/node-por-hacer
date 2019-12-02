const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = async(listadoPorHacer) => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error(`ocurrio el error ${err}`)
    });
}

const cargarDB = async() => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    let respuesta_save = guardarDB(listadoPorHacer)
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = true;
        guardarDB(listadoPorHacer);
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoLista = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoLista.length) {
        return false;
    } else {
        listadoPorHacer = nuevoLista;
        guardarDB(listadoPorHacer);
        return true;
    }
    /*
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1)
        guardarDB(listadoPorHacer);
        return true;
    } else {
        return false;
    }
 */
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}