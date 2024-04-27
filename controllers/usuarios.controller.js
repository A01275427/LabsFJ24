const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        username: request.session.username || '',
        registrar: false,
        error: error,
        csrfToken: request.csrfToken(),
    });
};

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
        .then(([users, fieldData]) => {
            if(users.length == 1) {
                //users[0] contiene el objeto de la respuesta de la consulta
                const user = users[0];
                bcrypt.compare(request.body.password, user.password)
                    .then(doMatch => {
                        if (doMatch) {
                            request.session.isLoggedIn = true;
                            request.session.username = user.username;
                            return request.session.save(err => {
                                response.redirect('/construcciones');
                            });
                        } else {
                            request.session.error = 'El usuario y/o contraseña son incorrectos.';
                            return response.redirect('/users/login');
                        }
                    }).catch(err => {
                        response.redirect('/users/login');
                    });
            } else {
                request.session.error = 'El usuario y/o contraseña son incorrectos.';
                response.redirect('/users/login');
            }
        })
        .catch((error) => {console.log(error)});
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); 
    });
};

exports.get_signup = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        username: request.session.username || '',
        registrar: true,
        error: error,
        csrfToken: request.csrfToken(),
    });
};

exports.post_signup = (req, res, next) => {
    console.log('Controller: Entering post_signup'); 
    const username = req.body.username;
    const password = req.body.password;
    console.log(`Received username: ${username}`); 
    
    const nuevo_usuario = new Usuario(username, password);
    nuevo_usuario.save()
      .then(() => {
        console.log('User saved successfully'); 
        res.redirect('/users/login');
      })
      .catch((error) => {
        console.error('Error saving user:', error); 
        req.session.error = 'Invalid username.';
        res.redirect('/users/signup');
      });
  };
  