const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Para servir archivos estáticos desde la carpeta public

let motocicletas = [
    {
        nombre: "BMW 310",
        imagen: "https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/8ef44752/BMW-G310-GS-1.webp",
    },
];

// Navbar HTML
const navbarHtml = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Logo_BMW_Motorrad_2021.svg/2560px-Logo_BMW_Motorrad_2021.svg.png" class="figure-img img-fluid rounded" alt="Logo de BMW Motorrad 2021" style="max-height: 40px;">
        </a>        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/agregar-moto">Agregar Motocicleta</a>
                </li>
                <!-- Más elementos del navbar según se requiera -->
            </ul>
        </div>
    </div>
</nav>`;

// Ruta de inicio
app.get('/', (req, res) => {
    let html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratorios</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</head>
<body>
    ${navbarHtml}
    <div class="container mt-4">
        <h1>Lista de Motocicletas</h1>
        <div class="list-group">`;

    motocicletas.forEach(moto => {
        html += `<a href="#" class="list-group-item list-group-item-action">
            <h5 class="mb-1">${moto.nombre}</h5>
            <img src="${moto.imagen}" class="img-fluid" alt="${moto.nombre}">
        </a>`;
    });

    html += `</div></div></body></html>`;
    res.send(html);
});

// Ruta para mostrar el formulario de agregar motocicleta
app.get('/agregar-moto', (req, res) => {
    let formHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agregar Motocicleta</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</head>
<body>
    ${navbarHtml}
    <div class="container mt-4">
        <h1>Agregar Motocicleta</h1>
        <form action="/agregar-moto" method="post">
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre:</label>
                <input type="text" class="form-control" id="nombre" name="nombre" required>
            </div>
            <div class="mb-3">
                <label for="imagen" class="form-label">Imagen URL:</label>
                <input type="text" class="form-control" id="imagen" name="imagen" required>
            </div>
            <button type="submit" class="btn btn-primary">Agregar</button>
        </form>
    </div>
</body>
</html>`;
    res.send(formHtml);
});

// Procesar el formulario y agregar una nueva motocicleta
app.post('/agregar-moto', (req, res) => {
    const { nombre, imagen } = req.body;
    motocicletas.push({ nombre, imagen });
    res.redirect('/');
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1><p>La página que buscas no existe. <a href="/">Volver al inicio</a></p>');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:3000`);
});
