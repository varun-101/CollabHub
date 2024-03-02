import express from "express";

const app = express();
const port = 8081;

app.get("/",(req,res)=>{
    res.json("HI")
})

app.listen(port , ()=>{
    console.log("Port Running...")
})