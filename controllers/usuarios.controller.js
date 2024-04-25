const bcrypt = require('bcryptjs');
const User = require('./model');

exports.signup = (req, res) => {
    res.render('signup', { csrfToken: req.csrfToken() });
};

exports.login = (req, res) => {
    res.render('login', { csrfToken: req.csrfToken() });
};

exports.postSignup = (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username })
        .then(existingUser => {
            if (existingUser) {
                return res.status(409).send('El usuario ya existe.');
            }

            return bcrypt.hash(password, 12);
        })
        .then(hashedPassword => {
            const newUser = new User({
                username,
                password: hashedPassword
            });
            return newUser.save();
        })
        .then(() => {
            res.status(201).send('Usuario registrado exitosamente.');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Error interno del servidor.');
        });
};

exports.postLogin = (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username })
        .then(user => {
            if (!user) {
                return res.status(401).send('Credenciales inválidas.');
            }

            return bcrypt.compare(password, user.password);
        })
        .then(doMatch => {
            if (doMatch) {
                req.session.isLoggedIn = true;
                req.session.user = user;
                return req.session.save(err => {
                    res.redirect('/');
                });
            }
            res.redirect('/login');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Error interno del servidor.');
        });
};

exports.protectedRoute = (req, res) => {
    res.send('¡Bienvenido a la ruta protegida!');
};
