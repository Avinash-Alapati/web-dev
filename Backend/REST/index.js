const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.urlencoded({extended : true}));

// middlewares to use our views folder even from root directory
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "views"));

// to use our css file
app.use(express.static(path.join(__dirname, "public")));

// Array or objects contains object - each object is a post
let posts = [
    {
        id : "1a",
        username : "Avinashh._.26",
        content : "Heyy! I'm Learning Backend Development!!"
    },

    {
        id : "B105",
        username : "Rebal_Sai",
        content : "Here is our first Deployed website Link"
    },

    {
        id : "3c",
        username : "Urstrulymahi",
        content : "Microsoft Azure Certified!!"
    },

    {
        id : "4d",
        username : "Ashok_Ashu",
        content : "New APP Launching Soon , Stay Tuned!!"
    },
]

// Render index.ejs on accessing of - localhost:8080/posts
// Shows all posts
app.get("/posts" , (req , res) => {
   res.render("index.ejs" , { posts }); 
});

// if the user accessed localhost:8080/posts/new - it should retun new.ejs
app.get("/posts/new" , (req , res) => {
    res.render("new.ejs")
})

// the request submitted via new.ejs using post request catches here and append the post details to posts array
app.post("/posts" , (req , res) => {
    let {username , content} = req.body; // destructoring of data
    posts.push({username , content});
    res.redirect("/posts");
})

// Access Each post by its id - localhost:8080/posts/B105
app.get("/posts/:id" , (req , res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id );
    console.log(post);
    res.render("show.ejs" , { post });
})

// RootDirectory - localhost:8080/
app.get("/" , (req , res) => {
    res.send("You have Accessed Root Directory");
})

// Listening Requests on Port
app.listen(port , () => {
    console.log("Listening at Port : 8080");
});

