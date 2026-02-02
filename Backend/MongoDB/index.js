const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main() // returns a Promise
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => console.log(err));

// Mongodb Schema
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee" , userSchema);

// Insert One
// const user1 = new User({
//     name : "Avinash",
//     email : "avinashalapati11@gmail.com",
//     age : 18
// });

// const user2 = new User({
//     name : "Sai",
//     email : "saijalluri77@gmail.com",
//     age : 20
// });

// // Save to DB
// user1
//     .save() // Returns a Promise
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// user2
//     .save() // Returns a Promise
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Insert Many

// User.insertMany([ // We can Pass Array of Objects to insertMany
//     {
//         name : "Mahi Vardhan",
//         email : "mahivardhanyadagani@gmail.com",
//         age : 19
//     },
//     {
//         name : "Ashok" ,
//         email : "bommanaboinaashok@gmail.com",
//         age : 20
//     }
// ]).then((res) => {
//     console.log(res);
// })

// Find in Mongoose

User.find()
  .then((res) => {
    console.log(res[0].name);
  })
  .catch((err) => {
    console.log(err);
  });

User.findOne({ age: { $gt: 47 } }).then((res) => {
  console.log(res);
});

// User.findById();

// Update in Mongoose;

User.UpdateOne({ name: "Ashok" }, { age: 45 }).then((res) => {
  console.log(res);
});

User.updateMany({ age: { $gte: 45 } }, { age: 26 }).then((res) => {
  console.log(res);
});
