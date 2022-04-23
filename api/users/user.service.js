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
      pool.query('SELECT * FROM registration',
      (error, results, fields) => {
          if(error){
              callBack(error);
          }
          return callBack(null, results);
      })
  },
  getUserById: (id, callBack) => {
      pool.query('SELECT * FROM registration where idUser = ?',[id],
      (error, results, fields) => {
          if(error){
              return callBack(error);
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
      pool.query('DELETE FROM registration where id = ?',[id],
      (error, results, fields) => {
          if(error){
              return recallBack(error);
          }
          return callBack(null, results[0]);
      })
  },

  getUserByEmail: (email, callBack) => {
      pool.query('SELECT * FROM registration WHERE email = ?',[email],
      (error, results, fields) => {
          if(error){
            return callBack(error)
          }          
        return callBack(null, results[0])
      })
  }
};
