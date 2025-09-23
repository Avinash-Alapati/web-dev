// Functions Basics 

function hello(){  // Defining function
    console.log("Hello World!");
}

hello(); // Function Call
hello();

function printName(){
    console.log("Hello");
    console.log("Avinash");
}

printName();
printName();
printName();


// Functions with Arguments

function Sum( a , b){
    console.log("Sum of 2 nums = " , a + b);
}

Sum(26 , 4);


function NewName(name){
    console.log("Hello");
    console.log(name);
}

NewName("Avinash");


function Info(naam , age){
    console.log("Heyyy!");
    console.log(`${naam} Age is ${age}`);
}

Info("Avinash" , 26);

// Create a function to roll a dice from 0-6 randomly;

function rollDice(){
    let rand = Math.floor(Math.random() * 6 ) + 1;
    console.log(rand);
}

rollDice();
rollDice();
rollDice();

// return keyword

function newSum(a , b){
    return a+b;
}

console.log(newSum(2,5));

newSum(newSum(2,3) , 25);

function isAdult(age){
    if(age>=18){
        return "is Adult";
    }
    else{
        return "not Adult";
    }
}

// ----------------------------------------------------------------------------------

// Function Scope

// Variables defined inside a function are not accessible from outside the function

// let sum = 26;

// function calSum(){
//     let sum = a+b;
// }

// console.log(sum)
// -----------------------------------------------------------------------------------

// Block Scope

// Variables declared inside a {} cannot be accessed from outside the block

// {
//     let a = 26;
// }

// console.log(a) // Cannot be accessed outside the block

// --------------------------------------------------------------------------

// Lexical Scope
// A variable defined outside a function can be accessible inside another function defined after variable decleration

// The opposite is not true

function outerFunc(){
    let x = 0;
    let y = 1;
    function innerFunc(){
        console.log(x);
    }

    innerFunc();
}

// ---------------------------------------------------------------------------

// Functions Expressions

const sum = function(a,b){
    return a+b;
}

sum(26,4);
// -----------------------------------------------------------------------------
    
// High Order Functions 

// A function that does one or both
// Takes one or multiple functions as an argument
// returns a function

 function multipleGreet(func , count){
    for (let i = 0; i <= count; i++){
        func();
    }
 }

 let greet = function() {
    console.log("Hello Avi!");
 }

 multipleGreet(greet , 5);

 // ---------------------------------------------------------------

 // Methods

 // Actions That can be performed on a object

 const calculator = {
    add: function(a,b){
        return a + b;
    },
    sub : function(a,b){
        return a - b;
    },
    mul : function(a,b){
        return a * b;
    }
 };