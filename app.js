console.log("Hola desde node")

const filesystem = require('fs');
const http = require('http');

/*
filesystem.writeFileSync('hola.txt', 'Hola desde node');



const arreglo = [5000, 60, 90, 100, 10, 20 , 10000, 0, 120, 2000, 240, 1000]

for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}

console.log("En que momento se escribe esto")
*/


const te_hackie = () => {
    console.log('jojo te hackié');
};


const server = http.createServer( (request, response) => {    
    console.log(request.url);
    if (request.url == "/") {
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratorios</title>
    <link rel="stylesheet" href="estilo.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <figure class="figure">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Logo_BMW_Motorrad_2021.svg/2560px-Logo_BMW_Motorrad_2021.svg.png" class="figure-img img-fluid rounded" alt="Logo de BMW Motorrad 2021">
            </figure>        
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
<body>
    <header>
        <h1>Laboratorios</h1>
        <p>Arturo Sánchez Rodríguez - A01275427 - a01275427@tec.mx</p>
    </header>

    <div class="producto">
        <img src="https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/8ef44752/BMW-G310-GS-1.webp" alt="Producto 1" class="imagen-producto">
        <h3>BMW 310 GS</h3>
        <p>Precio: $141,600</p>
        <input type="number" id="cantidadProducto1" min="1" max="10" value="1">
    </div>
    <div class="producto">
        <img src="https://img.remediosdigitales.com/77db5d/bmw-f850gs-f750gs-2018-05/1366_2000.jpg" alt="Producto 2" class="imagen-producto">
        <h3>BMW 750 GS</h3>
        <p>Precio: $295,000</p>
        <input type="number" id="cantidadProducto2" min="1" max="10" value="1">
    </div>
    <div class="producto">
        <img src="https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/25f24f25/BMW-F-850-GS-2.webp" alt="Producto 3" class="imagen-producto">
        <h3>BMW 850 GS</h3>
        <p>Precio: $324,900</p>
        <input type="number" id="cantidadProducto3" min="1" max="10" value="1">
    </div>
    <footer class="bg-dark text-white mt-4">
        <div class="container-fluid py-3">
            <div class="row">
                <div class="col-md-6">
                    <h5>Arturo Sánchez Rodríguez</h5>
                    <p>Descripción breve de la empresa o información de contacto.</p>
                </div>
                <div class="col-md-6">
                    <h5>Enlaces Rápidos</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-white">Inicio</a></li>
                        <li><a href="#" class="text-white">Sobre Nosotros</a></li>
                        <li><a href="#" class="text-white">Servicios</a></li>
                        <li><a href="#" class="text-white">Contacto</a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p class="text-center text-white">© 2024 Arturo Sánchez Rodríguez - Todos los derechos reservados</p>
                </div>
            </div>
        </div>
    </footer>

    


    `);
    response.end();
    
    } else if (request.url == "/prueba") {
    } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratorios</title>
    <link rel="stylesheet" href="estilo.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <figure class="figure">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Logo_BMW_Motorrad_2021.svg/2560px-Logo_BMW_Motorrad_2021.svg.png" class="figure-img img-fluid rounded" alt="Logo de BMW Motorrad 2021">
            </figure>        
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <footer>
    <div class="card">
        <div class="card-header">
        Featured
        </div>
        <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</footer>
    `);
    
    response.end();
    }
    
});

    

    


server.listen(3000);

/*
const datos = [];

request.on('data', (dato) => {
    console.log(dato);
    datos.push(dato);
});

return request.on('end', () => {
    const datos_completos = Buffer.concat(datos).toString();
    console.log(datos_completos);
    const nuevo_dato = datos_completos.split('=')[1];
    return response.end();
});
*/