const express = require('express');
const router = express.Router();


const motocicletas = [
    {
        nombre: "BMW 310",
        imagen: "https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/8ef44752/BMW-G310-GS-1.webp",
    },
];

router.get('/motocicletas', (request, response, next) => {
    response.render('motocicletas');
});

router.post('/motocicletas', (request, response, next) => {
    console.log(request.body);
    motocicletas.push(request.body);
    response.redirect('/');
});

router.get('/', (request, response, next) => {
    console.log('Ruta /');
    response.render('motocicletas', {
        motocicletas: motocicletas,
    });
});

module.exports = router;