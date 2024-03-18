const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'arturosanchezrodiguez_motos',
    password: 'Dyna=202702'
});

module.exports = pool.promise();