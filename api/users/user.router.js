const {createUser, getUserById,getUsers,updateUser,deleteUser} = require("./user.controller");
const  router = require("express").Router();

router.post("/",createUser);
router.get("/users",getUsers);
router.get("/:id",getUserById);

module.exports = router;