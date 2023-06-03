require("dotenv").config()
const mysql = require("mysql")


/*** CREATE DATABASE ***/
// create connection
const connectionCreate = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
});

// connect to MySQL server
connectionCreate.connect(function (err) {
    if (err) {
        return console.error("error: " + err.message);
    }
    console.log("Connected to MySQL server.");

    // create database
    const createDatabase = `CREATE DATABASE ${process.env.MYSQL_DATABASE}`;

    connectionCreate.query(createDatabase, function (err, result) {
        if (err) {
            console.log(err.message);
        }
        console.log("Database created!")
    });

    // close database connection
    connectionCreate.end(function (err) {
        if (err) {
            return console.log(err.message);
        }
    });
});
