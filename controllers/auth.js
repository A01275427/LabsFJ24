const bcrypt = require('bcryptjs');
const User = require('../models/user');

module.exports = {
    getRegister: (req, res) => {
        res.render('register', { csrfToken: res.locals.csrfToken });
    },

    postRegister: async (req, res) => {
        const { username, password } = req.body;

        try {
            await User.createUser(username, password);
            res.redirect('/login');
        } catch (err) {
            res.send(`Error: ${err.message}`);
        }
    },

    getLogin: (req, res) => {
        res.render('login', { csrfToken: res.locals.csrfToken });
    },

    postLogin: async (req, res) => {
        const { username, password } = req.body;
        const user = User.findUser(username);

        if (!user) {
            return res.send('Usuario no encontrado');
        }

        const doMatch = await bcrypt.compare(password, user.password);

        if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            res.redirect('/');
        } else {
            res.send('Contraseña incorrecta');
        }
    }
};
