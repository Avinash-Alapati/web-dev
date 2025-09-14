// Async Keyword - Creates Async Function

// if we use async function it defaultly returns a promise 

// FullFilled Promise
async function greet(name) {
    console.log(name); // Returns a Promise
    return "greet Fullfilled Promise";
}

// let hello = async () => {};   // Returns a Promise

// Rejected Promise
async function greetErr() {
    throw "Weak Connection";
    return "Error --> rejected Promise";
}

greet("Hello").then(() => {
    console.log("Promise Resolved");
    return greet("Avinash")
})
.then((resolve) => {
    console.log("Result was : ", resolve)
    return greet("Mahi");
})
.then(() => {
    return greet("Sai");
})
.then(() => {
    return greet("Ashok");
})
.then(() => {
    return greetErr();
})
.catch((ex) => {
    console.log(`Exception - ${ex} Found`);
})
