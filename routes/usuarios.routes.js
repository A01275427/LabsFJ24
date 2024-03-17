const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/usuarios', usuariosController.get_usuarios);
router.post('/crear-usuario', usuariosController.post_crear_usuario);

router.get('/login', usuariosController.login); 
router.get('/profile', usuariosController.profile);
router.get('/logout', usuariosController.logout);

module.exports = router;
