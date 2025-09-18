// Axios is a library to create HTTP Requests

// Making API call using Axios

let btn = document.querySelector('button');
let p = document.querySelector('#fact');

btn.addEventListener("click", async () => {
    let randFact = await getFacts();
//    console.log(randFact)
    p.innerText = randFact;
})

let url = 'https://catfact.ninja/fact';

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (ex) {
        return "Facts Not found"
    }
}

// ------------------------------------------------------------------------------------

// Making Another API Call using Dog API

let dogUrl = 'https://dog.ceo/api/breeds/image/random';
let dogBtn = document.querySelector('#img');
let dogData = document.querySelector('#dogImg');

async function getDogImg () {
   try{
     let newImg = await axios.get(dogUrl);
      return newImg.data.message;
   } catch (e) {
    return "Error caught!";
   }
}



dogBtn.addEventListener("click" , async () => {
    let newReq = await getDogImg();
    dogData.setAttribute('src' , newReq)
})

// ----------------------------------------------------------------------------

// Sending Headers with API Request using Axios

const newUrl = 'https://icanhazdadjoke.com/';

async function getJokes() {
    try{
        const config = {headers : {Accept : 'application/json'}};
        let res = await axios.get(newUrl , config);
        console.log(res.data.joke);
    } catch (e){
        //
    }
}

