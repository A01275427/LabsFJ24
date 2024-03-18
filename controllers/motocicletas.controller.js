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
    const nuevaMoto = new Motocicleta(request.body.nombre, request.body.imagen, request.body.username); 
    try {
        await nuevaMoto.save();
        response.redirect('/motocicletas');
    } catch (error) {
        if (error.code === 'ER_NO_REFERENCED_ROW_2') {
            console.log('El usuario proporcionado no existe en la base de datos.');
        } else {
            console.log(error);
        }
    }
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
