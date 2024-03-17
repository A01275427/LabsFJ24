let siguienteId = 2; 

module.exports = class Motocicleta {
    constructor(nombre, imagen) {
        this.id = siguienteId++; 
        this.nombre = nombre;
        this.imagen = imagen;
    }

    save() {
        motocicletas.push(this); 
    }

    static fetchAll() {
        return motocicletas; 
    }
};

const motocicletas = [
    {
        id: 1,
        nombre: "BMW 310 gs",
        imagen: "https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/8ef44752/BMW-G310-GS-1.webp",
    },
];
