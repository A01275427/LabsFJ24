const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const motocicletasRoutes = require('./routes/motocicletas.routes');
const usuariosRoutes = require('./routes/usuarios.routes'); 

app.use(motocicletasRoutes);
app.use(usuariosRoutes); 

app.use((req, res) => {
    res.status(404).render('includes/404', { tituloPagina: 'Página no encontrada' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
