

// DOM generated gif container
const cardBottom = document.querySelector(".card__bottom");
let cardGifImage = document.createElement("img");
cardBottom.appendChild(cardGifImage);
cardGifImage.classList.add('card__gif')


//gif array
gifArray = [];



//gif api key and urls, populating an array of awesome gifs
const API_URL_WRONG = "https://api.giphy.com/v1/gifs/search?api_key=WCNPEEq824VpugXdhDPhEKsj39IGL2tu&q=wrong&limit=25&offset=0&rating=g&lang=en";
const API_URL_NOPE ="https://api.giphy.com/v1/gifs/search?api_key=WCNPEEq824VpugXdhDPhEKsj39IGL2tu&q=nope&limit=25&offset=0&rating=g&lang=en";
const API_URL_LAUGH = "https://api.giphy.com/v1/gifs/search?api_key=WCNPEEq824VpugXdhDPhEKsj39IGL2tu&q=laugh+at+you&limit=25&offset=0&rating=g&lang=en";
const API_KEY = "WCNPEEq824VpugXdhDPhEKsj39IGL2tu";


axios
    .get(API_URL_WRONG)
    .then((response)=>{
        const apiGif = response.data.data
        apiGif.forEach((result)=>{
            gifArray.push(result.images.original.url)
        })

    })
    .catch((err)=>{
        console.log("Sorry no awesome gifs for you")
    })

axios
    .get(API_URL_NOPE)
    .then((response)=>{
        const apiGif = response.data.data
        apiGif.forEach((result)=>{
            gifArray.push(result.images.original.url)
        })
    })
    .catch((err)=>{
        console.log("Sorry no awesome gifs for you")
    })

axios
    .get(API_URL_LAUGH)
    .then((response)=>{
        const apiGif = response.data.data
        apiGif.forEach((result)=>{
            gifArray.push(result.images.original.url)
        })
    })
    .catch((err)=>{
        console.log("Sorry no awesome gifs for you")
    })



const form = document.querySelector(".form");
const button = document.querySelector(".form__submit");
const buttonTwo = document.getElementById("testing");
console.log(buttonTwo);

button.addEventListener("click", () =>{
    cardGifImage.src = " ";
    console.log("TESTING");
    gifGenerator(gifArray);
})


function gifGenerator(gifArray){
    const randomIndex = Math.floor(Math.random()*gifArray.length);
    const gifUrl = gifArray[randomIndex];
    cardGifImage.src = gifUrl;

    return cardGifImage;
}