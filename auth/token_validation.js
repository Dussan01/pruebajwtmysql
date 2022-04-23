const {verify} =require("jsonwebtoken");
const {getUserByEmail} = require("../api/users/user.service");

module.exports = {
    checkToken: (req, res, next) => {
        const token = req.get("authorization");
        if(token){
            token = token.slice(7);
            verify(token, "qwe1234",(err, decode) => {
                if(err){
                    res.json({
                        success: 0,
                        message: "No autorizado"
                    });
                } else {
                    next();
                }
            })
        }else{
            res.json({
                success:0,
                message: "Acceso denegado"
            })
        }
    },
    checkDuplicateEmail: (req,res, next) => {
        const email = req.body.email;
        getUserByEmail(email, (err, results) => {
            if(err){
                res.status(400).json({success:0, message:"Algo ha pasado"});
            }
            if(results){
                res.status(400).json({success:0, message:"Pailas"});
            }else{
                next();
            }
        })

    }


}