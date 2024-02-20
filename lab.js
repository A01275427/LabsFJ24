alert("Esta fácil el Laboratorio 4 LALOOOO")

console.assert()

console.warn("VALISTE CHAVO");
console.error("ERROR 404");

//Declarar variable
var juego = "ola";
console.log(juego)

//Declarar constante
const precio = 50;
console.log(precio)

//Forma moderna para declarar variables
let cantidad = 1;
console.log(cantidad)




document.write("<li> <strong>Ejercicio 1</strong> <br></br></li>")
var numero = prompt("Ingrese un número:"); 
document.write("<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
for (var i = 1; i <= numero; i++) {
    document.write("<tr><td>" + i + "</td><td>" + i*i + "</td><td>" + i*i*i + "</td></tr>");
}
document.write("</table>");


document.write("<li> <strong>Ejercicio 2</strong> <br></br></li>");
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
var inicio = new Date().getTime();
var respuestaUsuario = prompt("¿Cuánto es " + num1 + " + " + num2 + "?");
var fin = new Date().getTime();
var tiempo = (fin - inicio) / 1000; 

if (parseInt(respuestaUsuario) === num1 + num2) {
    document.write("Correcto! Te tomo: " + tiempo + " segundos.");
} else {
    document.write("Incorrecto. Error : " + (num1 + num2) + ". Tomaste " + tiempo + " segundos.");
}

document.write("<li> Ejercicio 3 <br></br></li>");
const array = [1, 6, 7, 4, 9, 6, 8, 7, 11, 0, -19, 5, 45, -66];

array.sort((a, b) => a - b);

document.write(array);

function contador(arr) {
    let numeroNeg = 0;
    let ceros = 0;
    let numeroPos = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            numeroNeg++;
        } else if (arr[i] === 0) {
            ceros++;
        } else {
            numeroPos++;
        }
    }

    return {
        cantidadNegativos: numeroNeg,
        cantidadCeros: ceros,
        cantidadNumeroPos: numeroPos
    };
}

const resultado = contador(array);

document.write("<br></br> Números negativos: " + resultado.cantidadNegativos);
document.write("<br></br> Cantidad de ceros: " + resultado.cantidadCeros);
document.write("<br></br> Números mayores a cero: " + resultado.cantidadNumeroPos);

document.write("<li> Ejercicio 4 <br></br></li>");


document.write("<li> Ejercicio 5 <br></br></li>");


document.write("<li> Ejercicio 6 <br></br></li>")