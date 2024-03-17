
exports.login = (request, response, next) => {
    response.setHeader('Set-Cookie', 'loggedIn=true; HttpOnly');
    response.redirect('/user/profile');
};

exports.profile = (request, response, next) => {
    const isLoggedIn = request.cookies['loggedIn'] === 'true'; 
    if (isLoggedIn) {
        response.send('Perfil del Usuario');
    } else {
        response.redirect('/login');
    }
};

exports.logout = (request, response, next) => {
    request.session.destroy(err => {
        if (err) {
            console.log(err);
            return next(err);
        }
        response.setHeader('Set-Cookie', 'loggedIn=; HttpOnly; Max-Age=0');
        response.redirect('/login');
    });
};
