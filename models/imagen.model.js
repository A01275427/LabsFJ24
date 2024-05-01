const db = require('../util/database');

module.exports = class Motocicleta {

    constructor(modelo, imagen) {
        this.modelo = modelo;
        this.imagen = imagen;
    }

    save() {
        return db.execute(
            'INSERT INTO motocicletas (modelo, imagen, username) VALUES (?, ?, "usuario123")',
            [this.modelo, this.imagen]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM motocicletas');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM motocicletas WHERE id=?', [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
}
