import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";


const app = express();
const port = 8081;

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

app.get("/", async (req,res)=>{
    res.json("HI")
    
    bcrypt.hash(myPlaintextPassword, saltRounds,async function(err, hassgen) {
        // Store hash in your password DB.
        hash = hassgen
        await db.query("INSERT INTO login (username,password) VALUES ($1,$2)", [
            username,
            hash,
          ]);
    });

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

app.listen(port , ()=>{
    console.log("Port Running...")
})

//postgresql://varun:Xrl-b1P6b_d0vws_A7yiwA@collabhub-8778.8nk.gcp-asia-southeast1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"