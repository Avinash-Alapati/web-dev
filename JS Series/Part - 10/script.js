// Event Bubbling

let div = document.querySelector('div');
let ul = document.querySelector('ul');
let li = document.querySelector('li');

div.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Div Was Clicked");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation(); // it will stop Event Bubbling
    console.log("ul Was Clicked");
});

for(li of lis){
    li.addEventListener("click" , function (event) {
        event.stopPropagation();
        console.log("li was clicked");
    });
}

