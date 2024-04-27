const bcrypt = require('bcryptjs');
const User = require('../models/user'); // Modelo para manejar usuarios

module.exports = {
    // Renderizar formulario de registro con token CSRF
    getRegister: (req, res) => {
        res.render('register', { csrfToken: res.locals.csrfToken });
    },

    // Procesar el registro de nuevos usuarios
    postRegister: async (req, res) => {
        const { username, password } = req.body; // Obtener datos del cuerpo de la solicitud
        const encryptedPassword = await bcrypt.hash(password, 12); // Encriptar la contraseña con bcrypt
        try {
            await User.create({ username, password: encryptedPassword }); // Crear nuevo usuario
            res.redirect('/login'); // Redirigir a la página de inicio de sesión
        } catch (err) {
            res.send(`Error: ${err.message}`); // Manejo de errores
        }
    },

    // Renderizar formulario de inicio de sesión con token CSRF
    getLogin: (req, res) => {
        res.render('login', { csrfToken: res.locals.csrfToken });
    },

    // Procesar el inicio de sesión
    postLogin: async (req, res) => {
        const { username, password } = req.body; // Obtener datos del cuerpo de la solicitud
        const user = await User.findOne({ where: { username } }); // Buscar usuario en la base de datos

        if (!user) {
            return res.send('Usuario no encontrado'); // Si el usuario no existe
        }

        const doMatch = await bcrypt.compare(password, user.password); // Comparar la contraseña con la almacenada

        if (doMatch) {
            req.session.isLoggedIn = true; // Establecer la sesión como iniciada
            req.session.user = user;       // Guardar el usuario en la sesión
            res.redirect('/');             // Redirigir a la página principal
        } else {
            res.send('Contraseña incorrecta'); // Mensaje de error
        }
    },
};
