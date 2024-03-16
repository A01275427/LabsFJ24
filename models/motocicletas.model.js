let siguienteId = 2; // Comienza en 2 porque ya tienes un objeto con id 1

module.exports = class Motocicleta {
    constructor(nombre, imagen) {
        this.id = siguienteId++; // Asigna un nuevo ID y lo incrementa para el siguiente
        this.nombre = nombre;
        this.imagen = imagen;
    }

    save() {
        motocicletas.push(this); // Aquí 'this' se refiere a la instancia actual de Motocicleta
    }

    static fetchAll() {
        return motocicletas; // Retorna todas las motocicletas
    }
};

const motocicletas = [
    {
        id: 1,
        nombre: "BMW 310 gs",
        imagen: "https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/8ef44752/BMW-G310-GS-1.webp",
    },
    // Puedes añadir más objetos aquí si es necesario
];
