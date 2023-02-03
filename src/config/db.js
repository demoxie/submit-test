import db from "./db-config.js"
import mysql from "mysql2"

const connection = mysql.createConnection({
    host: db().HOST,
    user: db().USER,
    password: db().PASSWORD,
    database: db().NAME
});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});
export default connection
