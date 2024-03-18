//const express = require('express');
//const router = express.Router();
//const usuariosController = require('../controllers/usuarios.controller');

//router.get('/', usuariosController.get_usuarios);
//router.post('/crear', usuariosController.post_crear_usuario);

//router.get('/login', usuariosController.login);
//router.post('/login', usuariosController.post_login);
//router.get('/profile', usuariosController.profile);
//router.get('/logout', usuariosController.logout);

//module.exports = router;

const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/login', usuariosController.login); 
router.post('/login', usuariosController.post_login);
router.get('/logout', usuariosController.logout); 
router.get('/signup', usuariosController.get_signup); 
router.post('/signup', usuariosController.post_signup); 
router.get('/profile', usuariosController.profile);

module.exports = router;

