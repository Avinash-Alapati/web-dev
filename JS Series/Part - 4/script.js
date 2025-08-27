let arr = [];
console.log(typeof arr); // Object

// Object Literals

// There is a difference between objects and object Literals

let newObj = {
    name: "Mahi",
    Native: "Vizag"
}

const student = {
    name: "Avinash Alapati",
    age: 18,
    city: "Kakinada",
    college: "Kakinada Institute of Engineering Technology"
}

console.log(student);

// -----------------------------------------------------------------------------------


// Thread / Twitter Post 

// Create an object Literal for the properties of the thread / twitter post which includes 

// Username
// content
// likes
// reposts
// tags

const post = {
    username: "@Avinashh_26",
    content: "This is my #First Post",
    likes: 26000,
    reposts: 18,
    tags: ["@Avinashh_26" , "@rebal_sai" , "@urstruly_mahi" , "@ashok_ashu"]
}

// to get our desired key

console.log(post["username"]);

console.log(post.tags[0]);

// Add/update Values in

const details = {
    name: "Sai Jalluri",
    age: "19",
    capacity: "7",
    city: "kakinada"
}

console.log(details.city);

details.city = "Vijayawada"; // Updating the existing value

console.log(details.city);

details.gender = "Male"; // adding new key-value pair

console.log(details.city);

details.marks = [99,89,79];

delete details.marks; // Delete the required key-value pair.

console.log(details);

// ---------------------------------------------------------------------------------

// Nested Object Literals

let studentName = {
    Avinash : {
        package : "12 LPA",
        role : "SDE Intern",
        company : "Google",
        batch : "2027"
    } ,

    Sai : {
        package : "13 LPA",
        role : "Full Stack Developer Intern",
        company : "Atlassin" , 
        batch : "2027"
    } ,

    Ashok : {
        package : "21 LPA",
        role : "APP Developer",
        company : "Cred" , 
        batch : "2027"
    },

    Mahi : {
        package : "15 LPA",
        role : "Azure Cloud Partitoner",
        company : "Microsoft" , 
        batch : "2027"
    }
}

// ---------------------------------------------------------------------------------

// Array of objects

let studentDetails = [
 
     {
        name : "Avinash",
        package : "12 LPA",
        role : "SDE Intern",
        company : "Google",
        batch : "2027"
    } ,

    {
        name : "Sai",
        package : "13 LPA",
        role : "Full Stack Developer Intern",
        company : "Atlassin" , 
        batch : "2027"
    } ,

     {
        name : "Ashok",
        package : "21 LPA",
        role : "APP Developer",
        company : "Cred" , 
        batch : "2027"
    },

    {
        name : "Mahi",
        package : "15 LPA",
        role : "Azure Cloud Partitoner",
        company : "Microsoft" , 
        batch : "2027"
    }

]

// We can access the array of objects using their index

console.log(studentDetails[0]);
console.log(studentDetails[2]);
console.log(studentDetails[3]);
console.log(studentDetails[4]);

// we can add update the values in it by using the previous methods

// -----------------------------------------------------------------------------------

// Math Object

console.log(Math);

console.log(Math.E);

console.log(Math.PI);

console.log(Math.abs(-26)); // Removes the Signs and give Plain number

console.log(Math.pow(2 , 4)); // Power a to the power of b

console.log(Math.floor(5.2748075048972)); // Round off to the smallest integer

console.log(Math.floor(-5.5)); // its returns -6 coz it is smaller than -5.5

console.log(Math.ceil(5.675)); // return 6 - Round off to the Largest integer

// Math.random always gives a random number btw 0 & 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// ------------------------------------------------------------------------------------

// Random Integer from 1 - 10

let num = Math.random();

num = num * 10;

console.log(Math.floor(num));

num += 1;

console.log(num);

// Random number
console.log( Math.floor ( Math.random() * 10) + 1);

