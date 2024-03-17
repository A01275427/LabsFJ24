const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser());

app.use(session({
    secret: 'secret-key', 
    resave: false,
    saveUninitialized: false,
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const motocicletasRoutes = require('./routes/motocicletas.routes');
const usuariosRoutes = require('./routes/usuarios.routes');

app.use('/motocicletas', motocicletasRoutes);
app.use('/usuarios', usuariosRoutes);

app.get('/login', (req, res) => {
    res.render('login'); 
});

app.get('/', (req, res) => {
    res.redirect('/motocicletas');
});

app.use((req, res) => {
    res.status(404).render('includes/404', { tituloPagina: 'Página no encontrada' });
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
