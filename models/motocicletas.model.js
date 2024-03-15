const motocicletas = [
    {
        id: 1,
        nombre: "BMW 310 gs",
        imagen: "https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/8ef44752/BMW-G310-GS-1.webp",
    },
];

module.exports = class Motos {
    marca(mi_nombre, mi_imagen) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen
    }
    save() {
        motocicletas.push({
            id: 1,
            nombre: this.nombre,
            imagen: this.imagen,
        });
        
    }
    static fetchAll() {
        return motocicletas
    }
}