// "This" Keyword

// "This" keyword refers to an object that is executing the current piece of code 

const Student = {
    user : "Avinash" , 
    Age : 18,
    DL : 5,
    CN : 10,
    OS : 8,
    getAvg() {
        let average = (this.DL + this.CN + this.OS) / 3;
        console.log(`${this.user} got an Average = ${average}`);
    }
}


// -----------------------------------------------------------------------------

// Try & catch 

// The try statement allows you to define a block of code to be tested for errors while it is being executed

// The catch statemtn allow you to define a block of code to be executed if an error occurs in try block 

// in Simple Terms we are checking errors in try block if we encounter an error then the code will execute catch block


console.log("Hello");
console.log("Hello");
console.log("Hello");

// let a = 26;
try{
    console.log(a);
} catch{
    console.log("Variable 'a' is not defined ");
}

console.log("Hello2");
console.log("Hello2");
console.log("Hello2");

// ---------------------------------------------------------------------------

// Miscellaneous Topics

// Arrow Functions

const sum = (a , b) => {
    console.log(a+b);
};

console.log(sum(3,5));

const cube = (n) => {
    return n*n*n;
};

let c = cube(2);
console.log(c);

const power = (a , b) => {
    return a**b;
}

console.log(power(2,3));

// Implcit Return in Arrow functions

const func = (a,b) => a**b;

// ------------------------------------------------------------------------------
// Set TimeOut Functions

// setTimeout(function , timeout)  // Function == callback

// Callback is a function which goes as an argument in another function

// Timeout Takes argument in MilliSeconds // 1s == 1000ms

// It exedutes only one time

console.log("Heyy There!");

setTimeout(() => {
    console.log("Avinash Alapati");
} , 4000);

console.log("Welcome To");

// ----------------------------------------------------------------------------

// SetInterval

// SetInterval takes two arguments i.e - function , timeout / Interval

// It executes Continuously after the interval

// setInterval(() => {
//     console.log("Avinash Alapati");
// } , 2000);

// let id = setInterval(() => {
//     console.log("Avinash Alapati");
// } , 2000);

// console.log(id);

// let id2 = setInterval(() => {
//     console.log("Hello World!");
// } , 3000);

// console.log(id2);

// but how to break it??

// every setInterval has its id wecan use that id to stop it executing multiple times by using clearInterval;

// clearInterval(id); // This will stop execution of Avinash Alapati

// ---------------------------------------------------------------------------------

// This Keyword with Arrow Functions

// Usecase of This keyword will be different in different in functions and arrow functions

// in Functions this keyword's scope will depend on by which object its being called

// in Arrow Functions this keywords scope is LexicalScope

const student = { // This is also having global scope
    name : "Sai",
    age : 20,
    prop : this,    // For Student object this is Window
    getName:  function() {
        console.log(this);
        return this.name;   
    } ,

    getMarks : () => {
        console.log(this); // Parent's Scope --> Window
        return this.age;
    } ,

    getInfo : function () {
        setTimeout(() => {
            console.log(this) // Student
        } , 2000)
    } ,

    getInfo2 :  function () {
        setTimeout(function () {
            console.log(this)  // Window
        } , 2000)
    } ,

}

const a = 5; // Global Scope