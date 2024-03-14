const express = require('express');
const router = express.Router();

let motocicletas = [
    {
        id: 1,
        nombre: "BMW 310 gs",
        imagen: "https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/8ef44752/BMW-G310-GS-1.webp",
    },
];

router.get('/motocicletas', (request, response) => {
    response.render('motocicletas', { 
        motocicletas: motocicletas,
        tituloPagina: 'Lista de Motocicletas' 
    });
});

router.get('/agregar-moto', (request, response) => {
    response.render('agregarMoto', {
        tituloPagina: 'Agregar Motocicleta'
    });
});

router.post('/agregar-moto', (request, response) => {
    const { nombre, imagen } = request.body;
    const nuevaMoto = {
        id: motocicletas.length + 1,
        nombre,
        imagen
    };
    motocicletas.push(nuevaMoto);
    response.redirect('/motocicletas');
});

router.get('/editar-moto/:motoId', (request, response) => {
    const motoId = request.params.motoId;
    const moto = motocicletas.find(m => m.id.toString() === motoId);
    if (!moto) {
        return response.status(404).render('includes/404', {
            tituloPagina: 'Moto no encontrada'
        });
    }
    response.render('editarMoto', {
        tituloPagina: 'Editar Motocicleta',
        moto
    });
});

router.post('/editar-moto', (request, response) => {
    const { id, nombre, imagen } = request.body;
    let motoIndex = motocicletas.findIndex(m => m.id.toString() === id);
    if (motoIndex >= 0) {
        motocicletas[motoIndex] = { id, nombre, imagen };
    }
    response.redirect('/motocicletas');
});

router.get('/eliminar-moto/:motoId', (request, response) => {
    const motoId = request.params.motoId;
    motocicletas = motocicletas.filter(m => m.id.toString() !== motoId);
    response.redirect('/motocicletas');
});

module.exports = router;
