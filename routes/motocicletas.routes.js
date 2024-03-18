//const express = require('express');
//const router = express.Router();
//const motocicletasController = require('../controllers/motocicletas.controller');

//router.get('/agregar-moto', motocicletasController.get_agregar_moto);
//router.post('/agregar-moto', motocicletasController.post_agregar_moto);
//router.get('/', motocicletasController.get_moto);

//module.exports = router;


const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const motocicletasController = require('../controllers/motocicletas.controller');

router.get('/agregar-moto', isAuth, motocicletasController.get_agregar_moto);
router.post('/agregar-moto', isAuth, motocicletasController.post_agregar_moto);
router.get('/:moto_id', isAuth, motocicletasController.get_moto_por_id);
router.get('/', isAuth, motocicletasController.get_moto);

module.exports = router;
