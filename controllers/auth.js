const bcrypt = require('bcryptjs');

const createUser = (email, password) {
    return bcrypt.hash(password, 12);
};

const authenticateUser (inputPassword, encryptedPassword) {
    return bcrypt.compare(inputPassword, encryptedPassword);
  };

module.exports = {
    createUser,
    authenticateUser
};
