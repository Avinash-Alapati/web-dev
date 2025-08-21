// User enters a max number & then tries to guess a random generated number from 1 to max

let max = prompt("Enter Max Number");

const random =  Math.floor ( Math.random() * max) + 1;
console.log(random)

let guess = prompt("Guess The Number");

while(guess != random){
    if(guess == random){
        console.log("Yayyy! Congrats you got it right");
        break;
    }

    else if(guess < random){
        console.log("Yoour guess was small! Try again");
    }

    else if(guess > random){
        console.log("Yoour guess was big! Try again");

    }

    if(guess == "quit"){
        console.log("You Quitted the game");
        break;
    }
    
    else{
        guess = prompt("Wrong! Try Again")
    }
}
