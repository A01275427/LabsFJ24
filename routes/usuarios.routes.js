const express = require('express');
const router = express.Router();

const controllerUsuarios = require('../controllers/usuarios.controller');

router.get('/login', controllerUsuarios.get_login);
router.post('/login', (req, res, next) => {
    console.log('Login endpoint hit');
    next(); 
  });
router.get('/logout', controllerUsuarios.get_logout);
router.get('/signup', controllerUsuarios.get_signup);
router.post('/signup', (req, res, next) => {
    console.log('Signup endpoint hit');
    next(); 
  });
module.exports = router;