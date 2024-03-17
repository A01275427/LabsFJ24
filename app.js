const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const motocicletasRoutes = require('./routes/motocicletas.routes');
const usuariosRoutes = require('./routes/usuarios.routes');

app.use('/motocicletas', motocicletasRoutes);
app.use('/usuarios', usuariosRoutes); 

app.get('/', (req, res) => {
    res.redirect('/motocicletas');
});

app.use((req, res) => {
    res.status(404).render('includes/404', { tituloPagina: 'Página no encontrada' });
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));