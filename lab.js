//alert("Esta fácil el Laboratorio 4 LALOOOO")

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



//Ejercicio 1
document.write("<br></br><li> <strong>Ejercicio 1</strong> <br></br></li>")
var numero = prompt("Ingrese un número:"); 
document.write("<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
for (var i = 1; i <= numero; i++) {
    document.write("<tr><td>" + i + "</td><td>" + i*i + "</td><td>" + i*i*i + "</td></tr>");
}
document.write("</table>");

//Ejercicio 2
document.write("<br></br><li> <strong>Ejercicio 2</strong> <br></br></li>");
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

//Ejercicio 3
document.write("<br></br><li> <strong>Ejercicio 3</strong> <br></br></li>");
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

//Ejercicio 4
document.write("<br></br><li> <strong>Ejercicio 4</strong> <br></br></li>");

function promedios(arr) {
    return arr.map(a => a.reduce((sum, val) => sum + val, 0) / a.length);
}
var arregloDeArreglos = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var promediosResultados = promedios(arregloDeArreglos);
document.write("Promedios de cada arreglo: " + promediosResultados.join(', '));


//Ejercicio 5
document.write("<br></br><li> <strong>Ejercicio 5</strong> <br></br></li>");

function inverso(num) {
    return Math.sign(num) * parseFloat(num.toString().split('').reverse().join(''));
}

var num1 = 12345
var num2 = -98765

document.write("Inverso de " + num1 + ": " + inverso(num1) + "<br>");
document.write("Inverso de " + num2 + ": " + inverso(num2) + "<br>");

//Ejercicio 6
document.write("<br></br><li><strong> Ejercicio 6</strong> <br></br></li>")

class Circulo {
    constructor(diametro) {
    this.diametro = diametro;
    this.radio = diametro / 2;
    this.area = Math.PI * Math.pow(this.radio, 2);
}

imprimirDatos() {
    document.write("Datos del círculo:<br></br>");
    document.write("Diámetro: " + this.diametro + "<br></br>");
    document.write("Radio: " + this.radio+ "<br></br>");
    document.write("Área: " + this.area+ "<br></br>");
}
}

var diametro = parseFloat(prompt("Ingresa el diámetro del círculo:"));
var miCirculo = new Circulo(diametro);
miCirculo.imprimirDatos();




