exports.get_usuarios = (request, response) => {
    response.send('Lista de usuarios');
};

exports.post_crear_usuario = (request, response) => {
    response.send('Usuario creado');
};

exports.login = (request, response) => {
    // Renderiza la vista de login
    response.render('login');
};

exports.post_login = (request, response) => {
    const { username, password } = request.body;
    // Aquí deberías verificar las credenciales del usuario contra tu base de datos
    // Simulamos una autenticación exitosa estableciendo una cookie
    response.cookie('loggedIn', 'true', { httpOnly: true, secure: true, maxAge: 3600000, sameSite: 'strict' });
    response.redirect('/usuarios/profile');
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
