// Load environment variables from .env
require('dotenv').config();

// Requiring Faker to get random DATA
const { faker } = require('@faker-js/faker');
// Require mysql to connect backend with db
const mysql = require('mysql2');



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

let q = "INSERT INTO fakeusers(id, username, email, password) VALUES ?";

let data = [];
for (let i = 0; i < 150; i++){
    data.push(getRandomUser()); // 150 Fake users is being generated using faker and pushed to array
}

try {
    connection.query(q, [data], (err , result) => { // query ,callback => ArrowFunction
        if (err) throw err;
        console.log(result);
        // console.log(result.length);
        // console.log(result[0]);
        // console.log(result[1]);
    }
)
} catch (e) {
    console.log(e);
}

// we need to close the connection manually
connection.end();

// console.log(getRandomUser());

// We can use 4 methods to use SQL
// --> Workbench
// --> Using mysql2 Package --> Node JS
// --> IN CLI --> mysql -u root -p
// --> using schema.sql file --> SOURCE schema.sql

