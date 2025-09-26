const express = require ('express');
const app = express();
const port = 8080;

app.get('/register' , (req , res) =>{ // In GET Request the data goes in query strings so we using req.query
    // console.log(req.query);
    let {user , password} = req.query;
    res.send(`Standard GET Request. Welcome ${user}!`);
});

app.post('/login' , (req , res) =>{ // In POST Request the data passes through body so we use req.body
    let {user , password } = req.query;
    res.send(`Standard POST Request. Welcome ${user}`);
});


app.listen(port , () => {
    console.log("Server is Listening");
});


