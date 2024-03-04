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
    <h4><strong>Prueba</strong></h4>
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
    

    <div class="container">
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#content1" aria-expanded="false" aria-controls="content1">
            Lab 1
        </button>

        <div class="collapse" id="content1">
            <div class="card card-body">
                <h2>Cosas sobre mi persona:</h2>
        <p>Disfruto aprendiendo cosas nuevas y actualmente colaboro con mi papá en un proyecto de levantamiento topográfico de terrenos para construcción. También estoy desarrollando un sistema de gestión de obras para la empresa familiar y otros proyectos relacionados con obras públicas. Me apasiona practicar deportes, leer y viajar. Un dato curioso es que tengo 14 perros.</p>
        <h2>Preguntas:</h2>
        <ol>
            <li>
                <h3><strong> ¿Cuál es la diferencia entre Internet y la World Wide Web?</strong></h3>
                <p>Internet es una red mundial de computadoras conectadas entre sí, mientras que la World Wide Web es una colección de páginas alojadas en esta red.</p>
            </li>
            <li>
                <h3><strong> ¿Cuáles son las partes de un URL?</strong></h3>
                <p>Las partes de un URL son: Protocolo de comunicación, Dominio, Directorio (opcional), Nombre del archivo y variables opcionales utilizando "&".</p>
            </li>
            <li>
                <h3><strong> ¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</strong></h3>
                <p>
                    <ul>
                        <li><strong>HTTP Get:</strong> Realiza peticiones a un recurso específico a través de la URL sin enviar datos en el cuerpo de la solicitud.</li>
                        <li><strong>HTTP Head:</strong> Similar al Get pero sin contenido en la respuesta; se utiliza para obtener el código de respuesta y el encabezado (header).</li>
                        <li><strong>HTTP Post:</strong> Envía datos a través del cuerpo de la solicitud sin utilizar el URL, ideal para datos sensibles como usuario y contraseña.</li>
                        <li><strong>HTTP Put:</strong> Similar al método Post, puede ser ejecutado múltiples veces teniendo el mismo efecto (agregar un recurso).</li>
                        <li><strong>HTTP Patch:</strong> Se utiliza para hacer modificaciones parciales en un recurso específico.</li>
                        <li><strong>HTTP Delete:</strong> Elimina un recurso específico y puede ser utilizado múltiples veces teniendo el mismo efecto.</li>
                    </ul>
                </p>
            </li>
            <li>
                <h3><strong> ¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</strong></h3>
                <p>El método ideal sería el Post, ya que permite enviar los datos en el cuerpo de la solicitud en lugar de a través del URL.</p>
            </li>
            <li>
                <h3><strong> ¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</strong></h3>
                <p>Se utiliza el método Get.</p>
            </li>
            <li>
                <h3><strong> Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</strong></h3>
                <p>No es un error; significa que la solicitud fue exitosa.</p>
            </li>
            <li>
                <h3><strong> ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</strong></h3>
                <p>En mi opinión, sí es responsabilidad del desarrollador corregir el error 404, ya que indica que no se encuentra el recurso solicitado. Corregirlo mejora la experiencia del usuario y evita posibles penalizaciones.</p>
            </li>
            <li>
                <h3><strong> ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</strong></h3>
                <p>Sí, es responsabilidad del desarrollador corregir el error 500 (error interno del servidor) para garantizar la funcionalidad y accesibilidad del sitio, mejorando así la experiencia del usuario.</p>
            </li>
            <li>
                <h3><strong> ¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</strong></h3>
                <p>Un atributo HTML5 desaprobado significa que se considera obsoleto. Algunos elementos de HTML 4 desaprobados en HTML5 son "font", "center", "strike", "applet", "basefont", "frameset" y "frame".</p>
            </li>
            <li>
                <h3><strong> ¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</strong></h3>
                <p>Las principales diferencias incluyen nuevos elementos semánticos, desaprobación de elementos, nuevos atributos, soporte multimedia y funciones avanzadas de navegador, ofreciendo mejores posibilidades para crear sitios web.</p>
            </li>
            <li>
                <h3><strong> ¿Qué componentes de estructura y estilo tiene una tabla?</strong></h3>
                <p>La tabla tiene varios componentes, incluyendo "caption" para un título, "colgroup" para agregar columnas, "col" para aplicar atributos a una o varias columnas, "tbody" para el cuerpo de la tabla, "thead" para el encabezado, "tfoot" para el pie, "tr" para una fila, "td" para una celda regular y "th" para la celda de encabezado.</p>
            </li>
            <li>
                <h3><strong> ¿Cuáles son los principales controles de un formulario HTML5?</strong></h3>
                <p>Existen muchos controles, algunos de ellos son el formulario en sí, los atributos type, name, value, required, placeholder, size, maxlength, minlength, autofocus, input, buttons, type=text, type=password, type=number, type=date, type=time, type=checkbox, type=radio, type=color, type=range y type=hidden, entre otros.</p>
            </li>
            <li>
                <h3><strong> ¿Qué tanto soporte HTML5 tiene el navegador que utilizas?</strong></h3>
                <p>Utilizo Chrome, que tiene un soporte de 476 puntos según la última verificación realizada hace aproximadamente 4 meses.</p>
            </li>
            <li>
                <h3><strong> Sobre el ciclo de vida y desarrollo de los sistemas de información:</strong></h3>
                <h3><strong>¿Cuál es el ciclo de vida de los sistemas de información?</strong></h3>
                <p>El ciclo de vida de los sistemas de información abarca las etapas de Planeación, Análisis, Diseño, Implementación, Pruebas, Instalación, Mantenimiento, Delimitación del ámbito del proyecto, Estudio de viabilidad, Análisis de riesgos y Ciclo de vida clásico.</p>
            </li>
            <li>
                <h3><strong> ¿Cuál es el ciclo de desarrollo de sistemas de información?</strong></h3>
                <p>El ciclo de desarrollo de sistemas de información comprende las fases de Planeación, Análisis, Diseño, Implementación, Pruebas, Instalación, Mantenimiento, Delimitación del ámbito del proyecto, Estudio de viabilidad, Análisis de riesgos y Ciclo de vida clásico.</p>
            </li>
        </ol>
            </div>
        </div>
    </div>
    

    <div class="container">
        <h2>Preguntas Laboratorio 3:</h2>
        <ol>
            <li>
                <h3><strong> Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?</strong></h3>
                <p>Se usa solo en casos excepcionales donde sea necesario anular estilos, pero logra priorizar reglas más especificas para mantener la claridad y el mantenimiento del código.</p>
            </li>
            <li>
                <h3><strong> Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</strong></h3>
                <p>Primero que nada debe ser con cuidado para poder garantizar la legibilidad del texto, que tenga un contraste adecuado y muchas cosas mas para que tenga compatibilidad con los dispositivos deseados.</p>
            </li>
            <li>
                <h3><strong> Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</strong></h3>
                <p>"%"" es para propiedades que necesitan ser proporcionales, "px" se utiliza para medidas fijas y por ultimo "em" o "rem" es para los tamaños de fuentes escalables, todo esto depende demasiado del contexto y de las necesidades.</p>
            </li>
            <li>
                <h3><strong> ¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</strong></h3>
                <p>La versión minimizada del CSS mejora el rendimiento del sitio para reducir el tiempo de descarga y ambien optimiza la caché y mejorar la experiencia del usuario.</p>
            </li>
        </ol>
        </div>

        <div class="container">
            <h2><strong> Laboratorio 4</strong></h2>
        <ol>
        </ol>
        <h2> Preguntas Laboratorio 4:</h2>
        <ol>
            <li>
                <h3><strong>¿Qué diferencias y semejanzas hay entre Java y JavaScript? </strong></h3>
                <p>Los dos son lenguajes de programación con diferencias significativas: Java fue desarrollado por Sun Microsystems, es un programa estático, tiene una sintaxis formal. JavScript fue creado por Netscape, es un programa dinámico, sirve en navegadores, tiene una sintaxis ligera y se enfoca en interactividad web. Diferencias: Propósito, tipado, plataforma, sintaxis. Similitudes: Orientación a objetos, comunidad activa.</p>
            </li>
            <li>
                <h3><strong>¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)</strong></h3>
                <p>Método getFullYear() - Método getMonth() - Método getDate() - Método getDay() - Método getHours() </p>
            </li>
            <li>
                <h3><strong>¿Qué métodos tienen los arreglos? (Menciona al menos 5*)</strong></h3>
                <p>Agregar - Remover - Slice - Concat - forEach - indexOf - findIndex</p>
            </li>
            <li>
                <h3><strong>¿Cómo se declara una variable con alcance local dentro de una función?</strong></h3>
                <p>Se declaran mediante VAR, LET, CONST.</p>
            </li>
            <li>
                <h3><strong>¿Qué implicaciones tiene utilizar variables globales dentro de funciones?</strong></h3>
                <p>El uso de variables globales dentro de funciones dificulta la legibilidad y mantenibilidad, alcance y visibilidad, conflicto de nombres, modificabilidad,</p>
            </li>
        </ol>
        </div>
        
        <div class="container">
            <h2> Laboratorio 5:</h2>
            <script src="app.js"></script>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-c8QTRoWepIq3BdxlV7K3kNZ7t+v4p6iUySLdje1kpJFvZovJ2lBQ3T2FdT1nt1Hf" crossorigin="anonymous"></script>
    </body>
</footer>
</html>


    `);
    response.end();
    
    } else if (request.url == "/prueba") {
    } else {
      //Código de respuesta para recurso no encontrado
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