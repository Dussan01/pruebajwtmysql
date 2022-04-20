const express = require("express");
require("dotenv").config();
const app = express();

const userRouter = require("./api/users/user.router");

app.use(express.json());
app.use("/api/users", userRouter);


app.listen(process.env.APPPORT,()=>{
    console.log("esta corriendo: ", process.env.APPPORT);
})