const express = require('express');

const router = express.Router();

router.post('/add-quote', (request, response, next) => {
    console.log(request.body);
    response.send('Datos del formulario recibidos.'); 
});

module.exports = router;