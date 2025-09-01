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

let para = document.querySelector("p");

console.dir(para);

console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);
