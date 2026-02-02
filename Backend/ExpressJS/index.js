const express = require('express');
const app = express();

let port = 3000;

// console.dir(app);

app.listen(port , () => {
    console.log(`app was Listening for requests on port : ${port}`)
});

// returns the res object in json format


// app.use((req , res) => {
//     console.log("New Incoming request on port");
//     // res.send({
//     //     name : "Avinash",
//     //     age : 18,
//     //     loves : "Coding"
//     // });

//     let code = "<h1> Avinash Alapati </h1> <ul><li>Web Developer</li> <li>FrontEnd</li> <li>Backend</li></ul>"
//     res.send(code);
// });


// Routing - GET , POST , PUT , PATCH , DELETE

app.get('/' , (req , res) => {
    res.send("You Have Accessed Root Path");
});

app.get('/apple' , (req , res) => {
    res.send("You Have Accessed apple Path");
});

// app.get('/orange' , (req , res) => {
//     res.send("You Have Accessed orange Path");
// });

// response for default paths if routes doesent match

// app.get("*" , (req , res) => {
//     res.send("This Path is Not Accesible");
// })

// app.post('/' , (req , res) => {
//     res.send("You send an post req");
// });


// Path Parameters

app.get('/:username/:id' , (req , res) => {
    let { username , id } = req.params;
    let htmlStr = `<h1>Welcome user - @${username}</h1>`
    console.log(`${username} , ${id}`)
    res.send(htmlStr);
})

// query Strings

app.get('/search' , (req , res) => {
    let {q} = req.query;
    if (!q) {
        res.send("Query Not Found");
    } 
    res.send(`<h1>Here is your Results for ${q}</h1>`);
})