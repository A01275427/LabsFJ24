const express = require('express');
const router = express.Router();
const motocicletasController = require('../controllers/motocicletas.controller');

// Mostrar formulario para agregar una nueva motocicleta
router.get('/agregar-moto', motocicletasController.get_agregar_moto);

// Procesar el formulario para agregar una nueva motocicleta
router.post('/agregar-moto', motocicletasController.post_agregar_moto);

// Ruta raíz para el listado de motocicletas
router.get('/', motocicletasController.get_moto);

module.exports = router;
