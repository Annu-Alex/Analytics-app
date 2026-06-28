const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());


app.get("/sales",(req,res)=>{
    res.json([
        {
            product:"Phone",
            amount:50000
        },
        {
            product:"Laptop",
            amount:80000
        }
    ]);
});


app.listen(5000,()=>{
    console.log("Server running");
});