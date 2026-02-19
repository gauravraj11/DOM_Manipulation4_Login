const express = require('express');
const cors = require("cors");



const server = express();
server.use(cors());
server.use(express.json());
server.get('/', (req, res)=>{
    res.send("Welcome !!!")
    console.log("Welcome");
    
})

server.post('/', (req, res)=>{
    console.log(req.body);
    //DB Check
    if (req.body.email === "abc@gmail.com" && req.body.password === "123") {
        res.json({ token: "abc123" });
    } else {
        res.json({ message: "Invalid credentials" });
    }
});

server.listen(9000, ()=>{
    console.log("server running on 9000");
    
})