// DOM Events - Events are signals that something has occured. (user inputs / actions)

// onclick - when an element is clicked

// onmouseenter - when an mouse enters an element 

// let btns = document.querySelectorAll('button');  

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

// for(btn of btns){
//     btn.addEventListener("click" , sayHello);
//     btn.addEventListener("click" , sayName);
//     btn.addEventListener("dblclick" , function () {
//         console.log("You Double-Clicked Me!");
//     });
// };



// EventListner for Multiple Elements

// let p = document.querySelector('p');

// p.addEventListener("click" , function () {
//     console.log("para was clicked");
// });

let box = document.querySelector('.box');

box.addEventListener('mouseenter' , function () {
    console.log("Mouse Inside Box")
})

// -----------------------------------------------------------------------------------------

// this in event Listeners

// when 'this' is used in a callback of event handler of something , it refers to that something

// let buttons = document.getElementById('thisBtn');
// let paragraph = document.querySelectorAll('p');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');

// function changeColor() {
//     console.log(this.innerText);
//     this.style.backgroundColor = 'violet'
// }

// buttons.addEventListener('click' , changeColor);

// for(para of paragraph){
//   para.addEventListener('click' ,changeColor);
// }


// h1.addEventListener('click' , changeColor);

// h3.addEventListener('click' , changeColor);

// -------------------------------------------------------------------------------

// Keyboard Events

let buttons = document.getElementById('thisBtn');

buttons.addEventListener('click' , function (event) {
    console.log(event);
    console.log("Button is Clicked");
});

buttons.addEventListener('dblclick' , function (event) {
    console.log(event);
    console.log("Button is double-clicked");
});

// keydown - fired when a key is pressed (any key)
// keyup - fired when a key is released after pressing

let inp = document.querySelector('input');

// inp.addEventListener('keydown', function (event) {
//     // console.log(event);
//     console.log("Key = " ,event.key);
//     console.log("Code = " ,event.code);
//     console.log("Key Was pressed");
// });

// inp.addEventListener('keyup' , function () {
//     console.log("Key was Released");
// });


inp.addEventListener('keydown', function (event) {
   console.log("Code = " , event.code); // ArrowUp , ArrowDown , ArrowLeft , ArrowRight 
   if(event.code == "ArrowUp" || event.code == "KeyW"){
    console.log("Character Moved Forward");
   } else if(event.code == "ArrowDown" || event.code == "KeyS"){
    console.log("Character Moved Backward");
   } else if(event.code == "ArrowLeft" || event.code == "KeyA"){
    console.log("Character Moved Left");
   } else if(event.code == "ArrowRight" || event.code == "KeyD  "){
    console.log("Character Moved Right");
   }
});

// ------------------------------------------------------------------------

// Form Events

let form = document.querySelector('form');

// form.addEventListener("submit" , function (event) {
//     event.preventDefault(); // it will stop the working of the default method
//     alert("Form Submitted");
// });

// Extracting form data 

form.addEventListener("submit" , function (event) {
    event.preventDefault(); // it will stop the working of the default method
   
    let firstName = document.querySelector('#fName');
    console.dir(firstName);
    console.log(firstName.value);

    let lastName = document.querySelector('#lName');
    console.dir(lastName);
    console.log(lastName.value);

    let email = document.querySelector('#mail');
    console.dir(email);
    console.log(email.value);

    let password = document.querySelector('#pass');
    console.dir(password);
    console.log(password.value);
});

// --------------------------------------------------------------------------------------
// More Events

// change event - The change event occurs when the value of an element has been changed 
// (only works on <input> , <textarea> , and <select> elements)

// it will check the value's from intial state to final state
let user = document.querySelector("#fName");

user.addEventListener("change" , function (event) {
    event.preventDefault();
    console.log("Change Event");
    console.log("Final Value = " , this.value);
})
// input event

// The input event fires when the value of an <input> , <select> or <textarea> element has been changer

user.addEventListener("input" , function (event) {
    event.preventDefault();
    console.log("Input Changed");
    console.log("Final Value = " , this.value);
})

// ------------------------------------------------------------------------- 

// Text Editor

let input = document.querySelector('#text');
let p = document.querySelector('#editorp');

input.addEventListener("input" , function () {
    p.innerText = input.value;
})