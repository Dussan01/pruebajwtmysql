const pool = require("../../config/database")

module.exports = {
    create: (data, callBack) => {
        pool.query('INSERT INTO registration(firstName, lastName, gander, email, password, number) VALUES (?,?,?,?,?,?);'
        );
    }
}