const express = require('express');
const router = express.Router();

const motocicletas = [
    {
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
    const nuevaMoto = request.body;
    motocicletas.push(nuevaMoto);
    response.redirect('/motocicletas');
});

// Posibles Rutas
// router.get('/editar-moto/:motoId', handler);
// router.post('/editar-moto', handler);
// router.get('/eliminar-moto/:motoId', handler);

module.exports = router;