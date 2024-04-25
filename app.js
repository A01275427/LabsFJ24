const express = require('express');
const session = require('express-session');
const csrf = require('csurf');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Configurar la conexión a MongoDB (cambia la URL según tus necesidades)
mongoose.connect('mongodb://localhost:27017/lab17_auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Configurar middleware
const csrfProtection = csrf();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(session({
    secret: 'clave-secreta', // Cambia esta clave secreta
    resave: false,
    saveUninitialized: false,
}));

// Configurar CSRF
app.use(csrfProtection);
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

// Configurar rutas
const authRoutes = require('./routes/usuarios.routes');
app.use(authRoutes);

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
