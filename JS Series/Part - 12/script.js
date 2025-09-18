// Async Keyword - Creates Async Function

// if we use async function it defaultly returns a promise 

// FullFilled Promise
async function greet(name) {
    console.log(name); // Returns a Promise
    return "greet Fullfilled Promise";
}

// Rejected Promise
async function greetErr() {
    throw "Weak Connection";
    return "Error --> rejected Promise";
}

greet("Hello").then(() => {
    console.log("Promise Resolved");
    return greet("Avinash")
})
.then((resolve) => {
    console.log("Result was : ", resolve)
    return greet("Mahi");
})
.then(() => {
    return greet("Sai");
})
.then(() => {
    return greet("Ashok");
})
.then(() => {
    return greetErr();
})
.catch((ex) => {
    console.log(`Exception - ${ex} Found`);
})


// async with Arrow Functions

let hello = async () => {return 5};   // Returns a Promise

// -------------------------------------------------------------------------

// Await Keyword

// Await - Pauses the execution of its surrounding async function until the promise is settled (resolved or rejected)

function getNum(){
    // console.log(26);

    return new Promise ((resolve , rejected) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    })
}

// Await keyword can only be used in async functions

async function demo(){
    await getNum();
    await getNum();
    await getNum();
     getNum();
}

// Implementing changeColour Promise chaining to async await optimised 

let h1 = document.querySelector('h1');

function changeColor(color , delay) {
   return new Promise((resolve , reject) => {     // ignoring reject coz its not any API call which gets rejected :|
        setTimeout(() => {
            let randNum = Math.floor(Math.random() * 5) + 1;
            if (randNum > 3) {
                reject("Promise Rejected due to Greater number");
            }
        h1.style.color = color;
        console.log(`Color Changed to ${color} Sucessfully!`);
        resolve("Promise Fullfilled");
    }, delay);
    })
}

async function newColor(){
    try {
        await changeColor("red" , 1000);
        await changeColor("orange" , 1000);
        await changeColor("green" , 1000);
        await changeColor("purple" , 1000);
        await changeColor("yellow" , 1000);
        await changeColor("skyblue" , 1000);
        await changeColor("greenyellow" , 1000);
    } catch (ex) {
        console.log("Error Caught : " , ex)
    }
    

    let a = 26;
    console.log(a);
    console.log("New Number is " , a + 3);
}

// changeColor --> Callback Hell --> Promise Chaining --> Async & Await

// -------------------------------------------------------------------------------

// Json - JavaScript Object Notation

// Json Returns the data in String Format

let jsonRes = '{"fact":"On average, cats spend 2\/3 of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life.","length":129}';

// json.parse(data) - Converts Js Data into an JavaScript Object

// console.log(jsonRes);

let validRes = JSON.parse(jsonRes);     // Converts Json Data into JavaScript Object

console.log(validRes);

console.log(validRes.fact);

// json.stringfy(data) - Converts js Object into JSON data (String)

let studentData = { 
    name : "Avinash",
    age : 18,
    backlogs : 3,
    Subjects : "Java , AI , P&S"
}

let convertedJson = JSON.stringify(studentData);

console.log(convertedJson);
console.log(typeof(convertedJson));


// We can test APIs using some Tools - Hoppcoth . Postman

// hoppscoth - hoppscoth.io

// Postman - Have to Download Software

// ------------------------------------------------------------------------------

// Ajax - Asynchronous JavaScript and XML

// Ajax - its the process of calling an API and getting response from it will be happen throught AJAX

// ------------------------------------------------------------------------------

// HTTP Verbs - GET , POST , DELETE etc............

// Status Codes 

// 200 - OK

// 404 - Not Found

// 400 - Bad request

// 500 - Internal Server Error


// Our First API Request

// using fetch (url);

let url = 'https://catfact.ninja/fact';

// fetch (url) // fetch also returns a promise (response) // req 1 --> Successfull
// .then((response) => { // 
//     console.log(response);
//     return response.json(); // returned in json format
// })
// .then((data) => { // catched the data returned in json format
//     console.log("Fact = " ,data.fact); // printing the json format
//     return fetch(url); // returned req 2
// })
// .then((res) => {
//     return res.json(); // converted req 2 to json
// })
// .then((data1) => {
//     console.log("Fact -1 = " ,data1.fact); // Printed req 2
// })
// .catch((err) => {
//     console.log(err);
// })

// The above is an async function js wont wait for it to get executed 

// this line will get printed before

console.log("Checking ASYNC");


// Using Async & Await to fetch an API Call

async function getfacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.fact);
    } catch(ex){
        console.log("Error Found : " , ex);
    }
    
    // console.log(res);
}