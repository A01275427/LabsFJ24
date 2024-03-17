// Ejemplo en un controlador existente, por ejemplo, userController.js

exports.login = (request, response, next) => {
    // Establecer una cookie segura
    response.setHeader('Set-Cookie', 'loggedIn=true; HttpOnly');
    response.redirect('/user/profile');
};

exports.profile = (request, response, next) => {
    const isLoggedIn = request.cookies['loggedIn'] === 'true'; // Leer la cookie
    if (isLoggedIn) {
        // Lógica para mostrar el perfil
        response.send('Perfil del Usuario');
    } else {
        response.redirect('/login');
    }
};

exports.logout = (request, response, next) => {
    // Eliminar la sesión
    request.session.destroy(err => {
        if (err) {
            // Manejar el error
            console.log(err);
            return next(err);
        }
        // Limpiar la cookie loggedIn
        response.setHeader('Set-Cookie', 'loggedIn=; HttpOnly; Max-Age=0');
        response.redirect('/login');
    });
};
