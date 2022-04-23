const {createUser, getUserById,getUsers,updateUser,deleteUser, login} = require("./user.controller");
const  router = require("express").Router();
const {checkToken, checkDuplicateEmail} = require("../../auth/token_validation");

router.post("/", checkDuplicateEmail, createUser);
router.get("/users",getUsers, checkToken);
router.get("/:id",getUserById, checkToken);
router.post("/login",login);

module.exports = router;