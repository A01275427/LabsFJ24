const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    save() {
      console.log('Model: Saving user'); 
      return bcrypt.hash(this.password, 12) 
        .then((hashedPassword) => {
          console.log('Password hashed');
          return db.execute(
            'INSERT INTO usuario (username, password) VALUES (?, ?)',
            [this.username, hashedPassword]
          );
        })
        .then(() => {
          console.log('User inserted into database'); 
        })
        .catch((error) => {
          console.error('Error inserting user into database:', error); 
          throw error; 
        });
    }
  };
  