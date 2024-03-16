const Motocicletas = require('../models/motocicletas.model'); // Asegúrate de tener este modelo implementado

exports.get_moto = (request, response, next) => {
    Motocicletas.fetchAll(motocicletas => {
        response.render('motocicletas', {
            motocicletas: motocicletas,
            tituloPagina: 'Lista de Motocicletas'
        });
    });
};

exports.get_agregar_moto = (request, response, next) => {
    response.render('agregarMoto', {
        tituloPagina: 'Agregar Motocicleta'
    });
};

exports.post_agregar_moto = (request, response, next) => {
    const nuevaMoto = new Motocicletas(request.body.nombre, request.body.imagen);
    nuevaMoto.save(() => {
        response.redirect('/motocicletas');
    });
};

exports.get_root = (request, response, next) => {
    Motocicletas.fetchAll(motocicletas => {
        response.render('motocicletas', {
            motocicletas: motocicletas,
            tituloPagina: 'Lista de Motocicletas'
        });
    });
};
