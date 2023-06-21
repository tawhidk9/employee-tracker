const mysql = require ("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gabagool',
    database: 'tracker_db'
},
    console.log(`Connected to DB.`)
);

db.connect(function (err) {
    if (err) throw (err);
    console.log("Connected to DB")
})

module.exports = db;