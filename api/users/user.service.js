const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "INSERT INTO registration(firstName, lastName, gander, email, password, number) VALUES (?,?,?,?,?,?);",
      [
          data.first_name,
          data.last_name,
          data.gender,
          data.email,
          data.password,
          data.number
      ],
      (error, results, fields) => {
          if(error){
              return callBack(error)
          }
          return callBack(null, results);
      }

    );
  },
  getUsers: callBack => {
      pool.query('SELECT * FROM registraction',[],
      (error, results, fields) => {
          if(error){
              recallBack(error);
          }
          return callBack(null, results);
      })
  },
  getUserById: (id, callBack) => {
      pool.query('SELECT * FROM registraction where id = ?',[id],
      (error, results, fields) => {
          if(error){
              return recallBack(error);
          }
          return callBack(null, results[0]);
      })
  },
  updateUser: (data, callBack) => {
    "UPDATE registration SET firstName = ?, lastName = ?, gander = ?, email = ?, password = ?, number = ? WHERE id = ?",
    [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id
    ],
    (error, results, fields) => {
        if(error){
            return callBack(error)
        }
        return callBack(null, results[0]);
    }
  },
  deleteUser: (id, callBack) => {
      pool.query('DELETE FROM registraction where id = ?',[id],
      (error, results, fields) => {
          if(error){
              return recallBack(error);
          }
          return callBack(null, results[0]);
      })
  },
};
