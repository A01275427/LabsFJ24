const Motocicletas = require('../models/motocicletas.model');

exports.get_moto = (request, response, next) => {
    response.render('motocicletas');
};

exports.get_root('/agregar-moto', (request, response) => {
    response.render('agregarMoto', {
        tituloPagina: 'Agregar Motocicleta'
    });
});

exports.post_motocicletas('/agregar-moto', (request, response) => {
    const { nombre, imagen } = request.body;
    const nuevaMoto = {
        id: motocicletas.length + 1,
        nombre,
        imagen
    };
    motocicletas.push(nuevaMoto);
    response.redirect('/motocicletas');
});