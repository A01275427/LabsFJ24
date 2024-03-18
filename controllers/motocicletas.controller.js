const Motocicleta = require('../models/motocicletas.model');

exports.get_agregar_moto = (request, response) => {
    response.render('agregarMoto', {
        tituloPagina: 'Agregar Motocicleta'
    });
};

exports.post_agregar_moto = async (request, response) => {
    const nuevaMoto = new Motocicleta(request.body.nombre, request.body.imagen, request.body.username);
    try {
        await nuevaMoto.save();
        response.redirect('/motocicletas');
    } catch (error) {
        console.log(error);
        response.redirect('/motocicletas/agregar-moto');
    }
};

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

exports.get_moto_por_id = async (request, response) => {
    try {
        const [motocicleta, _] = await Motocicleta.findById(request.params.moto_id);
        response.render('detalleMoto', {
            moto: motocicleta,
            tituloPagina: 'Detalle de la Motocicleta'
        });
    } catch (error) {
        console.log(error);
        response.redirect('/motocicletas');
    }
};
