const express = require('express');
const path = require('path');
const app = express();

// Configuración del motor de plantillas y directorio de vistas
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware para parsear el cuerpo de las solicitudes y servir archivos estáticos
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Importación de los enrutadores
const motocicletasRoutes = require('./routes/motocicletas.routes');
const usuariosRoutes = require('./routes/usuarios.routes');

// Rutas principales
app.use('/motocicletas', motocicletasRoutes); // Prefijo para todas las rutas de motocicletas
app.use('/usuarios', usuariosRoutes); // Prefijo para todas las rutas de usuarios

// Ruta raíz redirige a '/motocicletas' como página principal
app.get('/', (req, res) => {
    res.redirect('/motocicletas');
});

// Manejo de errores 404 - Página no encontrada
app.use((req, res) => {
    res.status(404).render('includes/404', { tituloPagina: 'Página no encontrada' });
});

// Iniciando el servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
