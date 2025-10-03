const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
// import { v4 as uuidv4 } from 'uuid';
const {v4 : uuidv4} = require('uuid');

// Method override -  Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
// Method Override to use PATCH , DELETE , PUT request in Client side form
const methodOverride = require('method-override');
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// We have to parse the data before we use
app.use(express.urlencoded({extended : true})); // it will parse the urlencoded and able to read in body

// middlewares to use our views folder even from root directory
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "views"));

// to use our css file
app.use(express.static(path.join(__dirname, "public")));

// Array or objects contains object - each object is a post
let posts = [
    {
        id : uuidv4(),// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'"1a",
        username : "Avinashh._.26",
        content : "Heyy! I'm Learning Backend Development!!"
    },

    {
        id : uuidv4(),
        username : "Rebal_Sai",
        content : "Here is our first Deployed website Link"
    },

    {
        id : uuidv4(),
        username : "Urstrulymahi",
        content : "Microsoft Azure Certified!!"
    },

    {
        id : uuidv4(),
        username : "Ashok_Ashu",
        content : "New APP Launching Soon , Stay Tuned!!"
    },
];

// Render index.ejs on accessing of - localhost:8080/posts
// Shows all posts
app.get("/posts" , (req , res) => {
   res.render("index.ejs" , { posts }); 
});

// if the user accessed localhost:8080/posts/new - it should retun new.ejs
app.get("/posts/new" , (req , res) => {
    res.render("new.ejs")
});

// the request submitted via new.ejs using post request catches here and append the post details to posts array
app.post("/posts" , (req , res) => {
    let {username , content} = req.body; // destructuring of data
    let id = uuidv4();
    posts.push({ id , username , content});
    res.redirect("/posts");
});

// Access Each post by it's id - localhost:8080/posts/B105
app.get("/posts/:id" , (req , res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id ); // returns the post that matches the same id;
    // console.log(post);
    res.render("show.ejs" , { post });
});

// To update the post 
app.patch("/posts/:id" , (req , res) => {
    let { id } = req.params;
    let newContent = req.body.content;

    let post = posts.find((p) => id === p.id );
    post.content = newContent;
    res.redirect("/posts");
});

// GET Update Form - to update post details
app.get("/posts/:id/edit" , (req , res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id );

    res.render("edit.ejs" , { post });
});

// Destroy Route

app.delete("/posts/:id" , (req , res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id );
    res.redirect("/posts");
})


// RootDirectory - localhost:8080/
// app.get("/" , (req , res) => {
//     res.send("You have Accessed Root Directory");
// })


// Listening Requests on Port
app.listen(port , () => {
    console.log("Listening at Port : 8080");
});

