const usuarios = [
    { nombre: "Usuario 1", edad: 30 },
    { nombre: "Usuario 2", edad: 24 },
];

exports.get_usuarios = (request, response, next) => {
    response.render('usuarios', {
        tituloPagina: 'Lista de Usuarios',
        usuarios: usuarios 
    });
};

exports.post_crear_usuario = (request, response) => {
    const nuevoUsuario = {
        nombre: request.body.nombre,
        edad: request.body.edad
    };
    usuarios.push(nuevoUsuario); 
    response.redirect('/usuarios'); 
};
