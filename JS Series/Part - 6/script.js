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

