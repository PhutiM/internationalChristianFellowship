const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    // password: '4eEGRku9v8',
    database: 'icf_schema'
})

module.exports = connection; 