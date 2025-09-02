// DOM Events - Events are signals that something has occured. (user inputs / actions)

// onclick - when an element is clicked

// onmouseenter - when an mouse enters an element 

let btns = document.querySelectorAll('button');

// btn.onclick = function () {
//     console.log("Button was Clicked");
// };

// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("You have entered a button radius");
//     }
// }

function sayHello (){
    console.log("Say Hello!");
};


function sayName (){
    console.log("Avinash Alapati!");
};

// we cannot do 2 things at a same time using onclick so we use event Listners

// --------------------------------------------------------------------------------------------------

// EventListner - addEventListener

// element.addEventListener(event , callback)

for(btn of btns){
    btn.addEventListener("click" , sayHello);
    btn.addEventListener("click" , sayName);
    btn.addEventListener("dblclick" , function () {
        console.log("You Double-Clicked Me!");
    });
};



// EventListner for Multiple Elements

let p = document.querySelector('p');

p.addEventListener("click" , function () {
    console.log("para was clicked");
});

