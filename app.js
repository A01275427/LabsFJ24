const express = require('express');
const session = require('express-session');
const csrf = require('csurf');
const isAuth = require('./util/is-auth'); // Middleware para proteger rutas

const authRoutes = require('./routes/auth'); // Rutas de autenticación
const app = express();

// Configurar sesión y CSRF
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use(csrf());
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

// Middleware para parsear datos
app.use(express.urlencoded({ extended: true }));

// Rutas Básicas
app.get('/', (req, res) => {
    res.render('index', { isLoggedIn: req.session.isLoggedIn, username: req.session.user?.username });
});

app.get('/about', (req, res) => {
    res.send('Página acerca de nosotros');
});

app.get('/contact', (req, res) => {
    res.send('Página de contacto');
});

// Rutas de Autenticación
app.use('/auth', authRoutes);

// Rutas Protegidas
app.get('/dashboard', isAuth, (req, res) => {
    res.send('Bienvenido al tablero');
});

app.get('/profile', isAuth, (req, res) => {
    res.send('Tu perfil');
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});
