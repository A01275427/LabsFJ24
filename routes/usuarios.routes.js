const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/signup', controller.signup);
router.post('/signup', controller.postSignup);
router.get('/login', controller.login);
router.post('/login', controller.postLogin);
router.get('/protected', isAuth, controller.protectedRoute);

// Middleware para proteger rutas
function isAuth(req, res, next) {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}

module.exports = router;
