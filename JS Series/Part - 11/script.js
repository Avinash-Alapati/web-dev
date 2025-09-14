// Call Stack

function hello(){
    console.log("Inside hello Function");
    console.log("Hello World!");
}


function demo(){
    console.log("Calling Hello Function");
    hello();
}


console.log("Calling Demo Function");
demo();
console.log("done! Bye Bye :)");

// visualizing the Call Stack

function one(){
    return 1;
}

function two (){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

// -----------------------------------------------------------------------------

// Single Threaded in JS - Single Threaded Means it can do one work at a time


// Synchronous Nature - Executes in a sequence / line by line

// let a = 10;
// console.log(a);
// let b = 16;
// console.log(b);
// console.log(a + b);

// Asynchronous Nature

setTimeout(() => {
    console.log("Avinash Alapati");
}, 2000);

console.log("Hello Line"); // Executes first

setTimeout(() => {
    console.log("Welcome Google!");
}, 2000);
console.log("Helloo User!!")

// --------------------------------------------------------------------------------------

// Nested Callbacks --> CallBack Hell

let h1 = document.querySelector('h1');

// setTimeout(() => {
//     h1.style.color = "skyblue";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);

// function changeColor(color , delay , changeNextColor) {
//     setTimeout(() => {
//         h1.style.color = color;
//        if(changeNextColor) changeNextColor();
//     }, delay);
// }

// changeColor("red" , 1000 , () => {
//     changeColor("orange" , 2000 , () => {
//         changeColor("green" , 3000 , () => {
//             changeColor("purple" , 4000 , () => {
//                 changeColor("yellow" , 5000 , () => {
//                     changeColor("skyblue" , 6000 , () =>{
//                         changeColor("greenyellow" , 7000)
//                     });
//                 });
//             });
//         });
//     });
// });


// Updating this callback hell using promises  # Line - 245


// -------------------------------------------------------------------------------

// Randomly Generate & Change color

// function changeColor(){
//     setInterval(() => {
//         newColor = getRandomColor();
//         h1.style.color = `rgb(${newColor})`;
//     },200);
// }

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `${red} , ${green} , ${blue}`;

//     return color;
// }

// changeColor();

// ---------------------------------------------------------------------------------------


// Promises - the promise objects represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value

//  a soloution for callback hell - Promises

// function saveToDb(data , success , failure){    // example

//     let internetSpeed = Math.floor((Math.random() * 10) + 1);

//     if (internetSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }

saveToDb(
    "Avinash Alapati",
    () => { // Success Callback
    console.log("Success : Your Data is Saved");     // on Sucess enter callback =hell
    saveToDb("Hello Aviii" , () => {    // Callback Hell Initialised
        console.log("Success 1 : Data Stored")
        saveToDb("Say Hello!" , () => { // level 1
            console.log("Success 2 : You data said hello");
        } , () => {
            console.log("Failuer 2 : You network is not good");
        })
    } , 
    () => {
        console.log ("Failure 1 : Network Connection ERROR");
    })
    },
    () => { // Failure Callback
    console.log("Failure : Weak Connection , data not Saved");
    }
    );

// Refactoring with promises

// Promise is an OBJECT

// Resolve & Reject

// Resolve - Success

// Reject - Failure


function saveToDb(data){    // example
    return new Promise((resolve , reject) => {
        let internetSpeed = Math.floor((Math.random() * 10) + 1);

        if (internetSpeed > 4){
            resolve("Data Saved Sucessfully")
        } else {
            reject("Failure : Poor Network!");
        }
    })
}

// Promise States - Pending , Rejected , Fuilfilled

// Promise also have its methods - Most frequently used 2 Methods are then() & catch()

// then() - happens after the promise was fullfilled

// catch() - happens after promise got rejected;


// let req= saveToDb("New Request"); // request = promise object

// console.log(req)
// req.then(() => {
//     console.log("Promise was Resolved");
// })
// .catch(() => {
//     console.log("Promise was Rejected");
// })

// ---------------------------------------------------------------------------------

// Promise Chaining

// saveToDb("New Request").then(() => {
//     console.log("Data 1 Saved , Promise was Resolved");
//     saveToDb("Student Data").then(() => {
//         console.log("Data 2 Has been Saved");
//     })
// })
// .catch(() => {
//     console.log("Promise was Rejected");
// })

// Optimised the Callback hell from line 142 - 161 using promises 

saveToDb("New Request").then((result) => {
    console.log("Data 1 Saved ");
    console.log("Result of Promise : " , result);
    return saveToDb("Student Data");
}).then((result) => {
    console.log("data 2 is Saved");
     console.log("Result of Promise : " , result);
    return saveToDb("Avinash Alapati");
}).then((result) => {
    console.log("Data 3 Saved Sucessfullyyy");
    console.log("Result of Promise : " , result)
})
.catch((error) => {
    console.log("Promise was Rejected");
    console.log("Error of Promise : " ,error)
})

// Promises are rejected and resolved with some data (valid results or error's)

// Applying Promises on changeColor Callback Hell :)

function changeColor(color , delay) {
   return new Promise((resolve , reject) => {     // ignoring reject coz its not any API call which gets rejected :|
        setTimeout(() => {
        h1.style.color = color;
        resolve("Color Changed Sucessfully!")
    }, delay);
    })
}

let requestPromise = changeColor("hotpink" , 2000);
console.log(requestPromise);

changeColor("red" , 1000).then(() => {
    console.log("Color Changed to red");
    return changeColor("orange" , 2000);
})
.then(() => {
    console.log("color changed to orange");
    return changeColor("green" , 2000);
})
.then(() => {
    console.log("color changed to green");
    return changeColor("purple" , 2000);
})
.then(() => {
    console.log("color changed to purple");
    return changeColor("yellow" , 2000);
})
.then(() => {
    console.log("color changed to yellow");
    return changeColor("skyblue" , 2000);
})
.then(() => {
    console.log("color changed to skyblue");
    return changeColor("greenyellow" , 2000);
})



