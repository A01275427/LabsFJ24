const express = require('express');
const usuarioController = require('../controllers/usuario.controller');

const router = express.Router();

router.post('/registro', usuarioController.postRegistro);
router.post('/login', usuarioController.postLogin);

module.exports = router;
