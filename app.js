const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const csurf = require('csurf');
const app = express();
const csrfProtection = csurf();

// Configuración de sesiones
app.use(session({
    secret: 'secreto', // Se recomienda utilizar una cadena secreta segura
    resave: false,
    saveUninitialized: false
}));

// Middleware para todas las peticiones
app.use(express.urlencoded({ extended: true })); // Para procesar datos de formularios
app.use(csrfProtection); // Protección CSRF

// Middleware global para el token CSRF
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');

// Rutas
const authRoutes = require('./routes/auth.routes');
app.use('/', authRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
