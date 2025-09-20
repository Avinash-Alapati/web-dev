const express = require('express'); // Requires express
const path = require('path'); // requores path to run the server from root directory


const app = express();
let port = 8080;

app.listen(port , () => {
    console.log(`Listening on Port : ${port}`)
} );

// when we call ejs express automatically check in views to render the page required

app.set('view engine' , "ejs"); // setting view engine to EJS
app.set("views" , path.join(__dirname , '/views'));  // This line enables the user to access the views folder
// even if he start the server from root directory i.e Backend in my path...

app.get('/' , (req , res) => {
    res.send("You Have Accessed Root");
})

// Example Usage - http://localhost:8080/ig/Avinash_26
app.get('/ig/:username' , (req , res) => {
    const followers = ["rebal_sai" , "urstrulymahi" , "X-Man_Ashu"];
    let { username } = req.params;
    // console.log(username);
    res.render("insta.ejs" , {username , followers});
})

// Example Usage - http://localhost:8080/insta/dogs
app.get('/insta/:username' , (req , res) => {
    let { username } = req.params;
    const instaData = require('./data.json');
    const data =  instaData[username];
    if(data) {
        res.render("Instagram.ejs", {data} );
    } else {
        res.render("error.ejs");
    }
    
})

// Example usage - http://localhost:8080/rolldice
app.get('/rolldice' , (req , res) => {
    let diceVal =  Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs" , {diceVal});
})

// Example Usage - http://localhost:8080/home
app.get('/home' , (req , res) => {
    res.render("home.ejs");
})



/* Tags
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

*/

// Includes - used to build subTemplates