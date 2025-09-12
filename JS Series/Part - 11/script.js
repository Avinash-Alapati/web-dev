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