const Motocicleta = require('../models/motocicletas.model'); // Asegúrate de tener este modelo implementado correctamente

exports.get_moto = (request, response) => {
    const motocicletas = Motocicleta.fetchAll();
    response.render('motocicletas', {
        motocicletas: motocicletas,
        tituloPagina: 'Lista de Motocicletas'
    });
};

exports.get_agregar_moto = (request, response) => {
    response.render('agregarMoto', {
        tituloPagina: 'Agregar Motocicleta'
    });
};

exports.post_agregar_moto = (request, response) => {
    const nuevaMoto = new Motocicleta(request.body.nombre, request.body.imagen);
    nuevaMoto.save();
    response.redirect('/motocicletas');
};
