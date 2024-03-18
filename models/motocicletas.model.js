const db = require('../util/database');

module.exports = class Motocicleta {
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
    }

    save() {
        return db.execute(
            'INSERT INTO motocicletas (nombre, imagen) VALUES (?, ?)',
            [this.nombre, this.imagen]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM motocicletas');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM motocicletas WHERE id=?', [id]);
    }

    static findById(id) {
        return db.execute('SELECT * FROM motocicletas WHERE id = ?', [id]);
    }


    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
};
