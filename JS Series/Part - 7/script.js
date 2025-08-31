// Array Methods


// ForEach , map , filter , sum , every, reduce

// For Each - Iterate through each of the element in the array

// arr.forEach(Some Function defenition or name)

let arr = [1,2,3,4,5];

// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);

// OR

arr.forEach(function (el) {
    console.log(el)
});

// we can use arrow functions as well

// arr.forEach((el) => {
//     console.log(el)
// });

let students = [{
    name : "Avinash",
    age : 18,
    marks : 95
},
{
    name : "Sai",
    age : 19,
    marks : 94.4
},
{
    name : "Ashok",
    age : 21,
    marks : 93
}];

arr.forEach((student) => {
    console.log(student.name);
});

// -----------------------------------------------------------

// Map - it will apply each and every element in the array and stores in a new array

// let newArr = arrrr.map(some function definition or name)

let num = [1,2,3,4,5,6];

let newArr = num.map((el) => {
    return el*2;
});

console.log(newArr);



// using Students arrays and applying map function to it

let CGPA = students.map((el) => {
    return el.marks / 10; 
});

console.log(CGPA);

// -----------------------------------------------------------------------------------

// Filter - it will store the elements in a new array whose callback is true 

// in simple terms if callback is true then the element will get stored in newArr

// let newArr = arr.filter(some function definition or name);

let nums = [1,2,3,4,5,6,5,7,8,9,12,14,16,18];

let even = nums.filter((num) => { 
    return num % 2 == 0 ;
} );

console.log(even);

// -------------------------------------------------------------------------------

// Every - Returns true if every element of array gives true for some function , Else return false

// arr.every(some function definition or name)

console.log([2,4,6,8].every( (el) => (el % 2 == 0)));

// --------------------------------------------------------------------------------------

// Some -  Returns true if some elements of array give true for some function , Else return false

// arr.some(some function definition or name)

console.log([1,2,3,4,5,6].some( (el) => (el % 2 == 0)));

// --------------------------------------------------------------------------

// Reduce -  Reduce the array to a single value

// arr.reduce(reducer function within 2 variables for (accumulator , element));


let numArr = [1,2,3,4];
let finalVal = numArr.reduce( (res , el) => (res * el) );

console.log(finalVal);

// ------------------------------------------------------------------------------

// Finding an max el in an array using reduce

let numsArr = [1,4,2,5,6,7,2,9,2];

let max = numsArr.reduce((max , element) => {
    if (max < element){
        return element;
    }
    else {
        return max;
    }
});

console.log(max);

// ---------------------------------------------------------------------------

// Default Parameters - Giving an default value to the arguments

// function func (a , b = 3) {};

function sum(a , b = 4){
    return a+b;
}

sum(2);

// ----------------------------------------------------------------------------------


// Spread

//  Expands an iterable into multiple values

console.log(..."Avinash"); // Gives Individual letters

 let val = [1,2,3,4];

 console.log(Math.min(...val)); // Give the whole arrays to return min

 // using in Array Literals

 // we can make a copy of same array using spread

 let newValArr = [...val];

console.log(newValArr);

//  Spread with Object Literals

let data = {
    email : "avinashalapati11@gmail.com",
    password : "xyz"
};

let dataCopy = {...data , id : 966 , Region : "India"};

console.log(dataCopy);

// ---------------------------------------------------------------------------------

// REST - Allows a Function to take a indefinite number of arguments and bundle them in array

function sum(...args){ // arguments
    for(let i = 0; i <args.length; i++ ){
        console.log("You gave us : " , args[i]);
    }
}

function min(a, b, c, d){
    console.log(arguments); // It will return the default collection
}

function newSum(...args){
    return args.reduce((sum , el) => sum + el)
}

// -----------------------------------------------------------------------------

// De-structuring - Stores values of Arrays into Multiple Variables

let names = ["Avinash" , "Mahi" , "Ashok" , "Sai"];

let [winner , runnerup] = names; // it will take the first 2 indices

console.log(winner,runnerup); // "Avinash" , "Mahi"

// DeStructuring in Objects

const student = {
    name : "Avinash",
    age : 18,
    Year : "3rd", 
    Subjects : ["Java" , "AI" , "P&S"],
    username : "Avinash_26",
    password : "xyz",
    city : "Kakinada"
};

// let username = student.username;
// let password = student.password;

let {username : user , password : secret , Subjects : supply , city : location } = student; // it will search the same key with variable name , and returns the value of the key to this variable

