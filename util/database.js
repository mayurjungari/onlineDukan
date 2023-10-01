const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Node_complete',
    password: 'Mayur@123'
});

module.exports = pool.promise();