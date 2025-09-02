// SELECTING ELEMENTS

// getElementById - returns the element as an object or null (if not found)

let imgObj = document.getElementById("mainImg");

console.log(imgObj);
console.dir(imgObj);
console.log(imgObj.src);

// ----------------------------------------------------------------------------------------------------

// getElementsByClassName - Returns the elements as an HTML Collection or empty collection (if not Found)

let oldImgObj = document.getElementsByClassName("oldImg");

console.log(oldImgObj);
console.dir(oldImgObj);

for(let i = 0; i <= oldImgObj.length; i++){
    console.dir(oldImgObj[i]);
}

// ---------------------------------------------------------------------------------------------------

// getElementByTagName - Returns the Elements as an HTML collection or emptycollection (if not found)

let tagObj = document.getElementsByTagName("p");

console.log(tagObj);

// tagObj[1].innerText = "Aviansh Alapati";   // changes the innerText of the paragraph

// -----------------------------------------------------------------------------------------------

// QuerySelectors - allows us to use any CSS Selectors

document.querySelector("p"); // Selects first p element
document.querySelector("#description"); // Selects first element with id = myId
document.querySelector(".oldImg"); // Selects first element with class = myClass


document.querySelectorAll("p"); // Selects all p elements 

console.dir(document.querySelector("div a"));

// ------------------------------------------------------------------------------------------

// textContent , innerText , innerHTML

let para = document.querySelector("p");

console.dir(para);

console.log(para.innerText); // Shows the visible content inside a node 
console.log(para.innerHTML); // Shows the full markup
console.log(para.textContent); // Shows all the full text

// Manipulation

// para.innerText = "Avinash Alapati"; 

//--------------------------------------------------------------------------------------------

// Manipulating attributes

// obj.getAttribute(attr) , obj.setAttributr(attr , val); // Getters & Setters

let img = document.querySelector("img");

console.log(img);

// console.log(img.getAttribute("id")); // mainImg

// console.log(img.setAttribute('id' , "spiderManImg")); // id == spiderManImg

// console.log(img.getAttribute("id")); // spiderManImg

// console.log(img.setAttribute('src' , "./assests/Amazing-SpiderMan.webp")); // This will change the first Spiderman Image to the last Image

// -----------------------------------------------------------------------------------------

// Manipulating Styles

// style property - obj.style

// In js the properties will get converted into camelCase

console.log(img.style);

let heading = document.querySelector('h1');

console.log(heading.style);

heading.style.color = 'purple';

heading.style.backgroundColor = 'yellow';

// Applying styles for links in the box

let links = document.querySelectorAll('.box a');

// for(let i = 0; i < links.length; i++){
//     links[i].style.color = 'pink';
// }

// Using for of loop

for(link of links){
    // link.style.color = 'yellow';
}


// Manipulating Style using classList

// obj.classList

// classList.add() - To add new Classes
// classList.remove() - To remove classes
// classList.contains() - To check if class exists
// classList.toggle() - To toggle between add and rmeove

let newImg = document.querySelector('img');

console.log(newImg.classList);  // null - we havent given any class

let newHeading = document.querySelector('h1');

newHeading.classList.add("newClass");  // add

newHeading.classList.remove("green"); // remove

console.log(newHeading.classList.contains("Underline")); // False

console.log(newHeading.classList.toggle('green')); // if not there it will add , if there it will remove

console.log(newHeading.classList);

// -----------------------------------------------------------------------------------------

// Navigation

// parentElement , children , previousElementSibling / nextElementSibling

// parentElement - we can print the parent element using the child

let h4 = document.querySelector('h4');

console.log(h4.parentElement); // it will return the parent element of the selected element

let box = document.querySelector('.box');

console.log(box.children); // returns the childerns of the given element

let ul = document.querySelector('ul');

console.log(ul.children);

console.log(ul.children[0].nextElementSibling);
console.log(ul.children[1]);
console.log(ul.children[2].previousElementSibling);

// -----------------------------------------------------------------------------------------------

// Adding Elements on Page

// document.createElement('p');

// appendChild(element);

// append(element);

// prepend (element);

// insertAdjacent(where , element);

let newP = document.createElement('p');

console.dir(newP);

console.log(newP.innerText = "Heyy! I am new Para");

let body = document.querySelector('body');

console.log(body.appendChild(newP));
box.appendChild(newP);

// create new element

let btn = document.createElement('button');

console.dir(btn);

btn.innerText = "Click Me!";

box.appendChild(btn);

// append - can append elements and even text / string

newP.append("  Here is new Appended Text!");

// prepend - adding elems in - first / starting

box.prepend(newP);

// insertAdjacent - add elements at location - beforebegin , afterbegin , beforeend , afterend

let newBtn = document.createElement('button');

newBtn.innerHTML = 'New Button!!!';

let p = document.querySelector('p');

// p.insertAdjacentElement("beforebegin" , newBtn);
// p.insertAdjacentElement("afterbegin" , newBtn);
// p.insertAdjacentElement("beforeend" , newBtn);
p.insertAdjacentElement("afterend" , newBtn);

// --------------------------------------------------------------------------------------

// Removing Elements - removeChild(element) , remove(element)

// body.removeChild(newBtn);

newBtn.remove();
