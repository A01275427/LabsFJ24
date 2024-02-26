const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde node');

const arreglo = [5000, 60, 90, 100, 10, 20 , 10000, 0, 120, 2000, 240, 1000]

for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}

console.log("En que momento se escribe esto")

const server = http.createServer ((request, respond) => {
    console.log(request.url);
    Response.setHeader('Content-Type', 'text/html');
    Response.write("Hola mundo desde node");
    Response.end();
})

server.listen(3000);
