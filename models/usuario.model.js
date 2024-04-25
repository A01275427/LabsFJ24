const bcrypt = require('bcryptjs');

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 12);
    }
}

module.exports = User;
