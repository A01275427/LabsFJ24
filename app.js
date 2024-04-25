const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const routes = require('./routes');

const app = express();

// Configuración del middleware
app.use(session({
    secret: 'miSecreto',
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({ extended: false }));

// Configuración de csrfProtection
const csrfProtection = csrf();
app.use(csrfProtection);

// Middleware para establecer el token CSRF en las vistas
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

// Configuración de las rutas
app.use('/', routes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
