const mysql = require('mysql2');
const db = mysql.createConnection({
    host:'localhost',
    database:'todolist',
    user:'root',
    password:'password123'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = db;