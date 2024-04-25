const express = require('express');
const router = express.Router();

const authController = require('../controllers/usuarios.controller');
const isAuth = require('../util/is-auth');

router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

router.get('/protected', isAuth, (req, res) => {
    res.send('Ruta protegida');
});

module.exports = router;
