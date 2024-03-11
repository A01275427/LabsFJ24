const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.send('Respuesta de la ruta ra&iacute;z/'); 
});

module.exports = router;