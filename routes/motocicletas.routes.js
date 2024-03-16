const express = require('express');
const router = express.Router();
const motocicletasController = require('../controllers/motocicletas.controller');

router.get('/agregar-moto', motocicletasController.get_agregar_moto);
router.post('/agregar-moto', motocicletasController.post_agregar_moto);
router.get('/', motocicletasController.get_moto);

module.exports = router;
