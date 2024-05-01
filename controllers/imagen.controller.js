const Motocicleta = require('../models/imagen.model');

exports.get_agregar = (request, response, next) => {
    response.render('agregar', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    }); 
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const motocicleta = new Motocicleta(request.body.modelo, request.file.filename);
    motocicleta.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie', 'ultima_motocicleta=' + request.body.modelo + '; HttpOnly');
            response.redirect('/motocicletas');
        })
        .catch((error) => {console.log(error)});

};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    let ultima_motocicleta = request.get('Cookie');
    if (ultima_motocicleta) {
        ultima_motocicleta = ultima_motocicleta.split('=')[1];
    } else {
        ultima_motocicleta = '';
    }
    console.log(ultima_motocicleta);

    Motocicleta.fetch(request.params.motocicleta_id).then(([rows, fieldData]) => {
        console.log(rows);
        response.render('motocicletas', {
            motocicletas: rows,
            ultima_motocicleta: ultima_motocicleta,
            username: request.session.username || '',
            permisos: request.session.permisos || [],
        });
    })
    .catch((error) => {
        console.log(error);
    });

}
