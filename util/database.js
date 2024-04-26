const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'motos',
    password: '',
});

module.exports = pool.promise();