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

// CallBack Hell

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

function changeColor(color , delay , changeNextColor) {
    setTimeout(() => {
        h1.style.color = color;
       if(changeNextColor) changeNextColor();
    }, delay);
}

changeColor("red" , 1000 , () => {
    changeColor("orange" , 2000 , () => {
        changeColor("green" , 3000 , () => {
            changeColor("purple" , 4000);
        });
    });
});


// -------------------------------------------------------------------------------

// Randomly change color

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
