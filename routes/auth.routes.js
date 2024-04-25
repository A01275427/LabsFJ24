const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/usuario.model');

router.get('/registro', (req, res) => {
    res.render('registro', { csrfToken: req.csrfToken() });
});

router.post('/registro', async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send('El usuario ya existe');
        }
        const newUser = new User(username, password);
        await newUser.hashPassword();
        // Guardar newUser en la base de datos
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});

router.get('/login', (req, res) => {
    res.render('login', { csrfToken: req.csrfToken() });
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).send('Credenciales incorrectas');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send('Credenciales incorrectas');
        }
        req.session.isLoggedIn = true;
        req.session.user = user;
        req.session.save(err => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error en el servidor');
            }
            res.redirect('/');
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});

const isAuth = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
};

router.get('/rutaProtegida', isAuth, (req, res) => {
    // Código para la ruta protegida
});

module.exports = router;
