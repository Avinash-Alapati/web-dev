const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.urlencoded({extended : true}));


app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username : "Avinashh._.26",
        content : "Heyy! I'm Learning Backend Development!!"
    },

    {
        username : "Rebal_Sai",
        content : "Here is our first Deployed website Link"
    },

    {
        username : "urstrulymahi",
        content : "Microsoft Azure Certified!!"
    },

    {
        username : "ashok_ashu",
        content : "New APP Launching Soon , Stay Tuned!!"
    },
]
app.get("/posts" , (req , res) => {
   res.render("index.ejs" , { posts }); 
});

app.get("/" , (req , res) => {
    res.send("You have Accessed Root Directory");
})

app.listen(port , () => {
    console.log("Listening at Port : 8080");
});

