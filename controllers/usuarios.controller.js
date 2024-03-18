const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.get_usuarios = (request, response) => {
    response.send('Lista de usuarios');
};

exports.post_crear_usuario = (request, response) => {
    response.send('Usuario creado');
};

exports.post_login = (request, response) => {
    const { username, password } = request.body;

    Usuario.fetchOne(username)
        .then(([rows]) => {
            if (rows.length === 0) {
                return response.redirect('/usuarios/login');
            }
            const user = rows[0];
            return bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        return request.session.save(err => {
                            response.redirect('/motocicletas');
                        });
                    }
                    response.redirect('/usuarios/login');
                });
        })
        .catch(err => console.log(err));
};

exports.profile = (request, response) => {
    const isLoggedIn = request.cookies['loggedIn'] === 'true';
    if (isLoggedIn) {
        response.send('Perfil del Usuario');
    } else {
        response.redirect('/usuarios/login');
    }
};

exports.logout = (request, response) => {
    request.session.destroy(err => {
        if (err) {
            console.log(err);
            return next(err);
        }
        response.cookie('loggedIn', '', { httpOnly: true, secure: true, maxAge: 0, sameSite: 'strict' });
        response.redirect('/usuarios/login');
    });
};

exports.get_signup = (request, response) => {
    response.render('signup');
};

exports.post_signup = (request, response) => {
    const { username, password } = request.body;
    Usuario.fetchOne(username)
        .then(([rows]) => {
            if (rows.length > 0) {
                return response.redirect('/usuarios/signup'); // El usuario ya existe
            }
            return bcrypt.hash(password, 12);
        })
        .then(hashedPassword => {
            const newUser = new Usuario(username, hashedPassword);
            return newUser.save();
        })
        .then(() => {
            response.redirect('/usuarios/login');
        })
        .catch(err => console.log(err));
};
