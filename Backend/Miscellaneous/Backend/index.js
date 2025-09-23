const express = require('express');
const app = express();
const port = 8080;

app.listen(port , () => {
    console.log("Server is Listening");
});

app.get('/register' , (req , res) =>{
    res.send("Standard GET Request");
});

app.post('/login' , (req , res) =>{
    res.send("Standard POST Request");
});


