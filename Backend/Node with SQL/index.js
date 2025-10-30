// Load environment variables from .env
require('dotenv').config();

// Requiring Faker to get random DATA
const { faker } = require('@faker-js/faker');
// Require mysql to connect backend with db
const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const { urlencoded } = require('body-parser');

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views" , path.join(__dirname , "/views"));
app.use(methodOverride("_method")); // to use method override
app.use(express.urlencoded({extended : true})); // To Parse the form data

// A function to use the faker
let getRandomUser = () => { // returning an object
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
];
};


// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.db_password,
  database: 'Avinash_app',
});

// Simple Query

// let q = "SHOW TABLES";
// try {
//     connection.query(q , (err , result) => { // query ,callback => ArrowFunction
//         if (err) throw err;
//         console.log(result);
//         console.log(result.length);
//         console.log(result[0]);
//         console.log(result[1]);
//     }
// )
// } catch (e) {
//     console.log(e);
// }

// ----------------------------------------------------------------------------------

// Inserting New Data
// ? --> Placeholders to dynamically pass the value
// let q = "INSERT INTO users(id, username, email, password) VALUES ?";
// //let user = ["4377", "rebal_sai", "7788sai123@gmail.com", "sai@1234"],
// let users = [
//     ["4378", "Avinashh._.26", "avinashalapati11@gmail.com", "avi@26"],
//     ["4291", "urstruly_mahi", "mahivardhanyadagani@gmail.com", "mahi@07"],
//     ["4379", "ashok_ashu", "bommanaboinaashok@gmail.com", "ashu@04"]
// ]
// try {
//     connection.query(q, [users], (err , result) => { // query ,callback => ArrowFunction
//         if (err) throw err;
//         console.log(result);
//         // console.log(result.length);
//         // console.log(result[0]);
//         // console.log(result[1]);
//     }
// )
// } catch (e) {
//     console.log(e);
// }

// --------------------------------------------------------------------------------

// Inserting in bulk using Faker

// let q = "INSERT INTO fakeusers(id, username, email, password) VALUES ?";

// let data = [];
// for (let i = 0; i < 150; i++){
//     data.push(getRandomUser()); // 150 Fake users is being generated using faker and pushed to array
// }

// try {
//     connection.query(q, [data], (err , result) => { // query ,callback => ArrowFunction
//         if (err) throw err;
//         console.log(result);
//         // console.log(result.length);
//         // console.log(result[0]);
//         // console.log(result[1]);
//     }
// )
// } catch (e) {
//     console.log(e);
// }

// --------------------------------------------------------------------------------------

// console.log(getRandomUser());

// We can use 4 methods to use SQL
// --> Workbench
// --> Using mysql2 Package --> Node JS
// --> IN CLI --> mysql -u root -p
// --> using schema.sql file --> SOURCE schema.sql


// Listening to APP
app.listen(port , () => {
    console.log("Server is Listening to port 8080");
});

// Index / Home Route --> Gives the Total number of users 
app.get("/" ,(req,res) => {
    let q = `SELECT COUNT(*) FROM fakeusers`;
    try {
        connection.query(q, (err , result) => {
            if (err) throw err;
            let count = result[0]["COUNT(*)"]
            // console.log(count);
            res.render("home.ejs" , { count });   
        });
    } 
    catch (err){
        console.log(err);
        res.send("Some Error in DB");
    }
    // res.send("Hi , I'm Groot");
});

// Show Route --> shows all the users in the database
app.get('/users' , (req , res) => {
    let q = `SELECT id, username, email FROM fakeusers`;
    try {
        connection.query(q , (err ,result) => {
            if (err) throw err;
            // console.log(result);
            // res.send(result);
            res.render("users.ejs" , { result })
        })
    } catch (err) {
        console.log(err);
        res.send("Some Error in DB");
    }
})

// Edit Route --> Returns a form to Edit Username
app.get('/users/:id/edit' , (req,res) => {
    let { id } = req.params;
    let q = `SELECT * FROM fakeusers WHERE id = '${id}'`;
    // console.log(id);

    try {
        connection.query(q , (err ,result) => {
            if (err) throw err;
            // console.log(result);
            // res.send(result);
            let user = result[0];
            console.log(user);
            res.render("edit.ejs" , { user });
        })
    } catch (err) {
        console.log(err);
        res.send("Some Error in DB");
    }
});

// Update (DB) Route --> Updates the actual username in database

app.patch('/users/:id' , (req , res) => { // accquires form data 
    let { id } = req.params;
    let {password : formPass, username : newUsername} = req.body;
    let q = `SELECT * FROM fakeusers WHERE id = '${id}'`; // query to get the user which matches the id
    
    try {
        connection.query(q , (err ,result) => {
            if (err) throw err; // throw an error if any occured 
            let user = result[0]; // get user data based on query
            console.log(user); // To get user data 
            if (formPass != user.password){ // check if the passwoord entered in form is wrong 
                res.send("Wrong Password");
            } else {
                let q2 = `UPDATE fakeusers SET username = '${newUsername}' WHERE id = '${id}'`;
                connection.query(q2 , (err , result) => {
                        if (err) throw err;
                        res.redirect('/users');
                })
            }
        })
    } catch (err) {
        console.log(err);
        res.send("Some Error in DB");
    }

})

// Add New Users Route 
// app.post('/users' ,(req , res) => {
//     let q = `INSERT INTO Fakeusers (id , username , email, password) VALUES ?`
//     res.render('add.ejs');
// })


// // we need to close the connection manually
// connection.end();

