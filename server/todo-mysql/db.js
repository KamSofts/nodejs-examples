require("dotenv").config(); // DB_USER, DB_PASSWORD
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "127.0.0.1",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "todoapp"
});

/*
db.getConnection((err, conn)=>{
    if (err){
        console.error(err.message);
    }
    if (conn){
        console.log("Connected");
        conn.release();
    }
});
*/

module.exports = db.promise();