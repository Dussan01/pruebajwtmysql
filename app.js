const express = require("express");
require("dotenv").config();
const app = express();


app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "esta trabajando"
    });
});


app.listen(process.env.APPPORT,()=>{
    console.log("esta corriendo: ", process.env.APPPORT);
})