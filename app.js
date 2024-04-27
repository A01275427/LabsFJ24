const express = require('express');
const session = require('express-session');
const csrf = require('csurf');

const authRoutes = require('./routes/auth');
const isAuth = require('./util/is-auth');

const app = express();

// Configurar sesiones con una clave secreta fuerte
app.use(session({
    secret: 'your-secret-key', // Cambiar a una clave secreta segura
    resave: false,             // No reescribir la sesión si no es necesario
    saveUninitialized: false   // No guardar sesiones no inicializadas
}));

// Configurar protección CSRF
const csrfProtection = csrf(); // Configurar el middleware CSRF
app.use(csrfProtection);       // Aplicar el middleware de CSRF

// Middleware para pasar el token CSRF a las vistas
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken(); // Pasar el token CSRF a las vistas
    next();  // Continuar con el siguiente middleware
});

// Configurar middleware para analizar datos del cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true }));

// Configurar motor de vistas
app.set('view engine', 'ejs'); // Motor de vistas EJS
app.set('views', 'views');     // Directorio de vistas

// Ruta para página de inicio
app.get('/', (req, res) => {
    res.send('Bienvenido a la aplicación'); // Mensaje de bienvenida
});

// Proteger una ruta con middleware de autenticación
app.get('/protegido', isAuth, (req, res) => {
    res.send('Esta es una ruta protegida'); // Ruta protegida por autenticación
});

// Rutas para autenticación
app.use('/auth', authRoutes); // Rutas para registro y autenticación

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000'); // Mensaje de confirmación
});
