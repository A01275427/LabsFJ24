const express = require('express');
const router = express.Router();
const imagenController = require('../controllers/imagen.controller');

router.get('/agregar', imagenController.get_agregar);
router.post('/agregar',  imagenController.post_agregar);
router.get('/:motocicleta_id',  imagenController.get_root);
router.get('/',  imagenController.get_root);

module.exports = router;
