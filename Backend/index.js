import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import cors from "cors";
import { log } from "console";
import axios from "axios";

const app = express();
const port = 8081;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
const hash = "k"

const myPlaintextPassword = "hihihi"
const username = "VARUN"

const saltRounds = 10

const db = new pg.Client({
    connectionString: "postgresql://varun:Xrl-b1P6b_d0vws_A7yiwA@collabhub-8778.8nk.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"
  })
  db.connect();


  app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/login", async (req,res)=>{
    console.log(req.body.username);
    // res.json(req.body.username)

    const pass = await db.query("SELECT password FROM login WHERE username = $1",[
        req.body.username
    ])
    console.log(pass.rows[0].password);
    if(pass.rows[0].password == req.body.password)
        res.json({ redirectUrl: 'http://localhost:4040/' });
        // res.redirect("https://www.google.com")

    // bcrypt.hash(myPlaintextPassword, saltRounds,async function(err, hassgen) {
    //     // Store hash in your password DB.
    //     hash = hassgen
    //     await db.query("INSERT INTO login (username,password) VALUES ($1,$2)", [
    //         username,
    //         hash,
    //       ]);
    // });

})

app.get("/check", async (req,res)=>{
    const dbpass = await db.query("SELECT password FROM login WHERE username = $1",[
        username
    ])
    console.log(dbpass.rows[0].password);
    bcrypt.compare(myPlaintextPassword,dbpass.rows[0].password, function(err, result) {
        if(result == true)
            res.json("TRUE")
        else
            res.json("False")
    });
})

app.post("/register", async(req,res)=>{
    console.log(req.body);
    const name = req.body.username
    const email = req.body.email
    const pass = req.body.password
    await db.query("INSERT INTO userdata (name,email) VALUES ($1,$2)", [
        name,
        email,
      ]);
    await db.query("INSERT INTO login (username, password) VALUES ($1,$2)",[
        email,
        pass
    ])
    res.json("uploaded")
})

app.listen(port , ()=>{
    console.log("Port Running...",[port])
})

//postgresql://varun:Xrl-b1P6b_d0vws_A7yiwA@collabhub-8778.8nk.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"

//github api from here
const API_URL = "https://api.github.com/search/repositories";

const yourBearerToken = "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";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.post("/git", async (req, res) => {
    try {
        console.log(req.body);
        const query = req.body.query
        const sort = req.body.sort
      const result = await axios.get(`https://api.github.com/search/repositories?q=${query}&sort=${sort}`, config);
    //   console.log(result);
      res.json(result.data)
    //   res.render(JSON.stringify(result.data) );
    } catch (error) {
    //   res.render(JSON.stringify(error.response.data) );
    console.log(error);
    }
  });