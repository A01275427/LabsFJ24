const express = require('express');
const session = require('express-session');
const csrf = require('csurf');
const csrfProtection = csrf();
const authRoutes = require('./routes/auth.routes');
const isAuth = require('./util/is-auth');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'tu_secreto',
    resave: false,
    saveUninitialized: false
}));

app.use(csrfProtection);

app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use(authRoutes);

mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conexión a MongoDB exitosa');
})
.catch(err => {
    console.log(err);
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
