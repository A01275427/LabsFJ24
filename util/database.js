const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'mysql-arturosanchezrodriguez.alwaysdata.net',
    user: '325456',
    database: 'arturosanchezrodriguez_motos',
    password: 'Dyna=202702'
});

module.exports = pool.promise();
