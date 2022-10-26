

// DOM generated gif container
const cardBottom = document.querySelector(".card__bottom");
const cardGifImage = document.createElement("img");
cardBottom.appendChild(cardGifImage);



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


button.addEventListener("click", () =>{
    cardGifImage = "";
    gifGenerator();
})


function gifGenerator(gifArray){
    const randomIndex = Math.floor(Matt.random()*gifArray.length);
    const gifUrl = gifArray[randomIndex];
    cardGifImage.src = gifUrl;

    return cardGifImage;
}