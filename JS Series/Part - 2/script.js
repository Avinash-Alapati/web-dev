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


// Sorting
console.log(primary.sort());

// array refrencing

console.log("name" == "name"); // true - comparing with value
console.log([1] == [1]); // False
console.log([1] == [1]); // False - its comparing with array adress not array variable
console.log([] == []); // False

// Example 

let Array = ["Avinash", "Sai" , "Ashok"];

let arrCopy = Array; // Ref Variable arrCopy pointing to the arrayvalues of ref var Array

arrCopy.push("Mahi"); // Operations made in arrCopy will also be changed on Arrar coz the arrCopy has pointed to the values of Array in memory

console.log(arrCopy);
console.log(Array);

console.log(Array == arrCopy);  // True - because both ref var are pointing to same array

// Const Array

const arr = [12,24,36,48]; // If declared const we cant update/change values further

// arr.push(25); //Throw an error coz we cant change values in const

arr.pop(); // even Const we can do some operations on it
console.log(arr);

// What we cant do if const == we cant add / create the array in existing array

// Example

arr = Array; // Array - which we have created earlier

// Nested Arrays - MultiDimensional Arrays!

// Array inside an array

let nestedArr = [[2,6] , [0,2] , [1,0]];

console.log(nestedArr);

console.log(nestedArr[0]); // it will gives our inside array basing on index value

// Very Basic Tic-Tac-Toe game 

// [[X , Null , O] ,
// [Null , X , Null] , 
// [O , Null , X]]

// we are creating an nested array to replicate the same pattern above

let game = [["X" , "Null" , "O"] , ["Null" , "Null" , "Null"] , ["O" , "Null" , "X"]];

console.log(game);

// Continue the game using 
// game[rowNum][colNum] = 'X' or 'O' 