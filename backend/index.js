import express from "express";
import mysql from 'mysql';
import cors from 'cors'

const app = express();
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database: "test"
})

app.use(express.json());
app.use(cors());

app.get("/users",(req,res)=>{
    const q = "SELECT * FROM users";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/users",(req,res)=>{
    const q = "INSERT INTO users (`firstName`,`lastName`,`email`,`phone`) VALUES (?)";
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.phone
    ];
    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err);
        return res.json("User has been created!!");
    })
})

app.delete("/users",(req,res)=>{
    const q = "DELETE FROM users";
        db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json("User has been created!!");
    })
})
app.use("/users/search",(req,res)=>{
    const q = 'SELECT * FROM users WHERE `email`=?';
    
    const email = req.body.email;
    console.log(email);
    db.query(q, [email],(err,data)=>{
        if(err) return res.json(err);
        // console.log(res.json(data))
        return res.json(data);
    })
})
app.listen(8801,()=>{
    console.log("connected to backend!!")
})