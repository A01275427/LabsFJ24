const Motocicleta = require('../models/motocicletas.model');

exports.get_moto = async (request, response) => {
    try {
        const [motocicletas, _] = await Motocicleta.fetchAll();
        response.render('motocicletas', {
            motocicletas: motocicletas,
            tituloPagina: 'Lista de Motocicletas'
        });
    } catch (error) {
        console.log(error);
    }
};

exports.get_agregar_moto = (request, response) => {
    response.render('agregarMoto', {
        tituloPagina: 'Agregar Motocicleta'
    });
};

exports.post_agregar_moto = async (request, response) => {
    const nuevaMoto = new Motocicleta(request.body.nombre, request.body.imagen);
    await nuevaMoto.save();
    response.redirect('/motocicletas');
};


exports.get_moto = (request, response) => {
    Motocicleta.fetchAll()
        .then(([motocicletas, _]) => {
            response.render('motocicletas', {
                motocicletas: motocicletas,
                tituloPagina: 'Lista de Motocicletas'
            });
        })
        .catch(err => console.log(err));
};
