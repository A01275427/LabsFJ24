const express = require('express');
const bodyParser = require('body-parser');
const motocicletasRoutes = require('./routes/motocicletas.routes'); 
const usuariosRoutes = require('./routes/usuarios.routes');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Utiliza las rutas definidas en motocicletas.routes.js
app.use(motocicletasRoutes);

app.use((request, response, next) => {
    response.status(404).render('includes/404', { tituloPagina: 'Página no encontrada' }); 
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

