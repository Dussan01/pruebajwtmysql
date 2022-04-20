const {create, getUserById, getUsers, updateUser, deleteUser } = require("./user.service");
const {genSaltSync, hashSync} = require("bcrypt");
module.exports = {
    createUser: (req, res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body,(err, results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database conexion error"
                });
            }
            return res.status(200).json({
                success:1,
                data: results
            });
        });
    },
    getUserById: (req, res) => {
        const id = req.params.id;
        getUserById(id, (err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "No encontrado"
                });                
            }
            return res.json({
                success: 1,
                data: results
            });

        })    
    },
    getUsers: (req, res) => {
        const id = req.params.id;
        getUsers(id, (err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "No encontrado"
                });                
            }
            return res.json({
                success: 1,
                data: results
            });

        })    
    },
    deleteUser: (req, res) => {
        const data = req.body
        deleteUser(data, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "No encontrado"
                });
            }
            return res.json({
                success: 1,
                message: "Eleminidado"
            })          
        });
    },
    updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "actualizado"
            });
        });
    }
}