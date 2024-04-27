const bcrypt = require('bcryptjs');

let users = []; // Ejemplo simple usando un array para almacenar usuarios

module.exports = {
    createUser: async (username, password) => {
        // Verificar que el usuario no exista
        const existingUser = users.find(u => u.username === username);
        if (existingUser) {
            throw new Error('El usuario ya existe');
        }

        // Encriptar contraseña
        const hashedPassword = await bcrypt.hash(password, 12);

        // Guardar el nuevo usuario
        const newUser = { username, password: hashedPassword };
        users.push(newUser);

        return newUser;
    },

    findUser: (username) => {
        return users.find(u => u.username === username);
    }
};
