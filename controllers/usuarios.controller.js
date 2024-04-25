const bcrypt = require('bcryptjs');
const User = require('../models/usuario.model');

exports.getSignup = (req, res) => {
    res.render('signup', {
        csrfToken: req.csrfToken(),
    });
};

exports.postSignup = async (req, res) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.redirect('/signup'); // El usuario ya existe
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
        email,
        password: hashedPassword,
    });

    await newUser.save();
    res.redirect('/login');
};

exports.getLogin = (req, res) => {
    res.render('login', {
        csrfToken: req.csrfToken(),
    });
};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.redirect('/login'); // Usuario no encontrado
    }

    const doMatch = await bcrypt.compare(password, user.password);
    if (doMatch) {
        req.session.isLoggedIn = true;
        req.session.user = user;

        return req.session.save((err) => {
            if (err) {
                console.error(err);
            }
            res.redirect('/');
        });
    }

    res.redirect('/login'); // Contraseña incorrecta
};
