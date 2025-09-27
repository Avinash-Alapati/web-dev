const express = require ('express');
const app = express();
const port = 8080;

app.get('/register' , (req , res) =>{ // In GET Request the data goes in query strings so we using req.query
    // console.log(req.query);
    let {user , password} = req.query;
    res.send(`Standard GET Request. Welcome ${user}!`);
});

// We have to parse the data before we use

app.use(express.urlencoded({extended : true})); // it will parse the urlencoded and able to read in body
app.use(express.json()); // it will parse the JSON data if JSON data Exists

app.post('/login' , (req , res) =>{ // In POST Request the data passes through body so we use req.body
    // let {user , password } = req.query; --> It doesent work here!!! we have to use req.body
    let {user , password} = req.body;
    res.send(`Standard POST Request. Welcome ${user}`);
});


app.listen(port , () => {
    console.log("Server is Listening");
});


