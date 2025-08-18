for(let i = 0; i < 7; i++){
    console.log(i); // Print nums till 7
}

// Printing odd Numbers

console.log("Odd Numbers till 15");
for(let i = 0; i <= 15; i++){
    if(i%2 != 0){
        console.log(i);
    }
}

console.log("Backwards")
for(let i = 15; i >=1; i--){
    if(i%2 != 0){
        console.log(i);
    }
}

console.log("Even numbers");
for(let i = 0; i < 15 ;i++){
    if(i%2 == 0){
        console.log(i)
    }
}

// Infinite Loop will occur if ending condition is incorrect

// for(let i = 0; i >= 1; i++){
//     console.log(i);
// }

// Dont Run the above comment code -- if you are willing to run be ready to pay for it

// Multiplication Table

for(let i = 1; i < 2; i++){
    for(let j = 0; j<=10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


// console.log("Multiplication Table")
// let n = prompt("Enter your Number: ");
// n = parseInt(n);

// for(let i = n; i <= n*10; i+=n){
//     console.log(i);
// }

// Nested for Loop;

for(let i = 0; i < 3; i++){
    console.log(i + " " + "Outer For Loop")
    for(let j = 0; j < 3; j++){
        console.log(j + " " + "Inner For Loop")
    }
}


// While Loop

let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

//  guess favMovie - type quit to exit

let favMovie = "Jersy";

// let userInput = prompt("Enter Avi's Favourite Movie: ");

// while((userInput != favMovie) && (userInput != "quit")){
    // userInput = prompt("You're wrong buddy! Try Again");
// }

// if(userInput == favMovie){
//     console.log("You're Correct Buddy! ");
// }

// Break Keyword

console.log("Break")
let value = 0;

while(value <= 5){
    if(value == 3){
        break;
    }
    console.log(value);
    value++;
}

console.log("We used break at 3")
