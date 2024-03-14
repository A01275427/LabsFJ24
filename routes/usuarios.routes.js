const express = require('express');
const router = express.Router();

const usuarios = [
    { nombre: "Usuario 1", edad: 30 },
    { nombre: "Usuario 2", edad: 24 },
];

router.get('/usuarios', (request, response) => {
    response.render('usuarios', {
        tituloPagina: 'Lista de Usuarios',
        usuarios: usuarios 
    });
});

router.post('/crear-usuario', (request, response) => {
    const nuevoUsuario = {
        nombre: request.body.nombre,
        edad: request.body.edad
    };
    usuarios.push(nuevoUsuario); 
    response.redirect('/usuarios'); 
});


module.exports = router;
