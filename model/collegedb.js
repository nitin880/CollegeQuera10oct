const mysql = require("mysql")

const conn = mysql.createConnection(
{
    host:"localhost",
    database:"collegequera",
    user:"root",
    password:"root"
})

module.exports = conn