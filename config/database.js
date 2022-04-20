require("dotenv").config();
const {createPool} = require("mysql");

const pool = createPool({
    port: process.env.PORT,
    host: process.env.DBHOST,
    user: process.env.USER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10
});

module.exports = pool;