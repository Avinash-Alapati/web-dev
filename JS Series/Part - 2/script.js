let msg = "     advhi       ";
console.log(msg.trim());  //trim method will remove the leading spaces and trailing spaces & create a new string
console.log(msg); // but the value of the original variable is same

let Name = "Avinash Alapati"

console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

let str = "iLoveCoding";

console.log(str.indexOf("Love")); // 1  - gives where it started occuring
console.log(str.indexOf("J")); // -1 Not found
console.log(str.indexOf("o")); // 2 - it will return the 1st index where it found the given arg

// Method Chaining
// Using multiple methods sametime - order Left-Right

let say = "     hello";
let newSay = say.toUpperCase().trim();

console.log(newSay);


// Slicing

// slice(Start index , end Index) - end Index = n + 1 // Non inclusive

let newStr = "AvinashLovesCoding"

console.log(newStr.slice(7)); // with Start Index
console.log(newStr.slice(7 , 12)); // end index + 1
console.log(newStr.slice(7 , newStr.length)); 

console.log(newStr.slice(-6)) // Coding // newStr.slice(-5) = newStr.slice(newStr.length - 5)


// Replace

let newWord = "AvinashLovesCoding"

console.log(newWord.replace("Loves" , "DO"));
console.log(newWord.replace("o" , "X")); 

// Repeat 

let fruit = "Apple";

console.log(fruit.repeat(3))

// Arrays - Collection of data 

// let names = ["Sai" , "Mahi", "Ashok" , "Avinash"] // You can print this in console

// We can Access each element in arr by using names[0] - Sai etc....

let info = ["Sai" , 100 , 6.2] // Mixed Array we can use diff datatypes

// arr.length() // we can get array length like this

// Empty array

let newArr = [];


// Array Methods

// Push - add to end // Unshift - add to Start
// POP - remove from end // Shift - Remove from Start

let names =  ["Sai" , "Mahi", "Ashok" , "Avinash"] ;

console.log(names.push("Philoman") , names);
console.log(names.pop(), names);
console.log(names.unshift("Rai Vamsi") , names);
console.log(names.shift() , names);

// indexOf & Includes

let colors = ["Red" , "Yellow" , "Green"];

console.log(colors.indexOf("Green"));
console.log(colors.indexOf("Pinkk"));
console.log(colors.includes("Red"));
console.log(colors.includes("Pinkkk"));

// Concat & reverse

let primary =  ["Sai" , "Mahi", "Ashok" , "Avinash"] ;
let secondary = ["Rai Vamsi" ,"Siva Ram", "Madhu Pavan" , "Manikanta"]

console.log(primary.concat(secondary)); // It will Merge 2 Arrays
console.log(secondary.reverse());  // it will reverse the array


console.log(primary.sort());