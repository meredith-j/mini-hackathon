
let x = Math.floor(Math.random() * 149) + 1;

const apiUrl = `https://pokeapi.co/api/v2/pokemon/${x}/`;

axios
  .get(apiUrl)

  .then((response) => {
    const pokeData = response.data;

    const speciesImgArray = pokeData.sprites;

    let pokemonPhoto = speciesImgArray.front_default;
  
    let photoAndNameHolder = document.querySelector(".card__pokemon");
    let nameHolder = document.querySelector(".card__js-name")
    let img = document.createElement("img");
    img.src = response.data.sprites.front_default;
    img.alt = "Pokemon Photo";
    img.classList.add('card__js-photo')
    photoAndNameHolder.appendChild(img);

    let pokemonList = [
      {
        name: "bulbadude",
        id: 1,
        photo: pokemonPhoto,
      },
      {
        name: "ivy parker",
        id: 2,
        photo: pokemonPhoto,
      },
      {
        name: "venusplant",
        id: 3,
        photo: pokemonPhoto,
      },
      {
        name: "bald dragon",
        id: 4,
        photo: pokemonPhoto,
      },
      {
        name: "char char binks",
        id: 5,
        photo: pokemonPhoto,
      },
      {
        name: "char wizard",
        id: 6,
        photo: pokemonPhoto,
      },
      {
        name: "squirtboy",
        id: 7,
        photo: pokemonPhoto,
      },
      {
        name: "warsquirt",
        id: 8,
        photo: pokemonPhoto,
      },
      {
        name: "turtleblast",
        id: 9,
        photo: pokemonPhoto,
      },
      {
        name: "haunted caterpiller",
        id: 10,
        photo: pokemonPhoto,
      },
      {
        name: "metal lettuce",
        id: 11,
        photo: pokemonPhoto,
      },
      {
        name: "butterfingers",
        id: 12,
        photo: pokemonPhoto,
      },
      {
        name: "nosey caterpiller",
        id: 13,
        photo: pokemonPhoto,
      },
      {
        name: "hakuna matata",
        id: 14,
        photo: pokemonPhoto,
      },
      {
        name: "buzzbaddie",
        id: 15,
        photo: pokemonPhoto,
      },
      {
        name: "ca-caw",
        id: 16,
        photo: pokemonPhoto,
      },
      {
        name: "pidgeon with a mullet",
        id: 17,
        photo: pokemonPhoto,
      },
      {
        name: "regal pidgeon with mullet",
        id: 18,
        photo: pokemonPhoto,
      },
      {
        name: "angry rat",
        id: 19,
        photo: pokemonPhoto,
      },
      {
        name: "you wanna piece of me? HUH?",
        id: 20,
        photo: pokemonPhoto,
      },
      {
        name: "angry bird",
        id: 21,
        photo: pokemonPhoto,
      },
      {
        name: "scary bird",
        id: 22,
        photo: pokemonPhoto,
      },
      {
        name: "SSSSSSSS",
        id: 23,
        photo: pokemonPhoto,
      },
      {
        name: "SSSSSSSSSSSSS",
        id: 24,
        photo: pokemonPhoto,
      },
      {
        name: "pikachill",
        id: 25,
        photo: pokemonPhoto,
      },
      {
        name: "pika-no chill",
        id: 26,
        photo: pokemonPhoto,
      },
      {
        name: "sandman",
        id: 27,
        photo: pokemonPhoto,
      },
      {
        name: "sandglam",
        id: 28,
        photo: pokemonPhoto,
      },
      {
        name: "ratattack",
        id: 29,
        photo: pokemonPhoto,
      },
      {
        name: "earlo",
        id: 30,
        photo: pokemonPhoto,
      },
      {
        name: "nido-you-go-girl",
        id: 31,
        photo: pokemonPhoto,
      },
      {
        name: "nido-do-wap",
        id: 32,
        photo: pokemonPhoto,
      },
      {
        name: "nidohorn",
        id: 33,
        photo: pokemonPhoto,
      },
      {
        name: "nidomad",
        id: 34,
        photo: pokemonPhoto,
      },
      {
        name: "clesleepy",
        id: 35,
        photo: pokemonPhoto,
      },
      {
        name: "cleehappy",
        id: 36,
        photo: pokemonPhoto,
      },
      {
        name: "foxy",
        id: 37,
        photo: pokemonPhoto,
      },
      {
        name: "taily",
        id: 38,
        photo: pokemonPhoto,
      },
      {
        name: "jiggle jiggle",
        id: 39,
        photo: pokemonPhoto,
      },
      {
        name: "wiggle wiggle",
        id: 40,
        photo: pokemonPhoto,
      },
      {
        name: "toothbat",
        id: 41,
        photo: pokemonPhoto,
      },
      {
        name: "gogobat",
        id: 42,
        photo: pokemonPhoto,
      },
      {
        name: "plantish",
        id: 43,
        photo: pokemonPhoto,
      },
      {
        name: "googoo",
        id: 44,
        photo: pokemonPhoto,
      },
      {
        name: "plume",
        id: 45,
        photo: pokemonPhoto,
      },
      {
        name: "shroomcrab",
        id: 46,
        photo: pokemonPhoto,
      },
      {
        name: "shroomsnail",
        id: 47,
        photo: pokemonPhoto,
      },
      {
        name: "furry dude",
        id: 48,
        photo: pokemonPhoto,
      },
      {
        name: "shymoth",
        id: 49,
        photo: pokemonPhoto,
      },
      {
        name: "hot dog",
        id: 50,
        photo: pokemonPhoto,
      },
      {
        name: "three hot dogs",
        id: 51,
        photo: pokemonPhoto,
      },
      {
        name: "meowza",
        id: 52,
        photo: pokemonPhoto,
      },
      {
        name: "fancy cat",
        id: 53,
        photo: pokemonPhoto,
      },
      {
        name: "overwhelmed platypus",
        id: 54,
        photo: pokemonPhoto,
      },
      {
        name: "three-eyed dino",
        id: 55,
        photo: pokemonPhoto,
      },
      {
        name: "cursed monkey",
        id: 56,
        photo: pokemonPhoto,
      },
      {
        name: "cursed ape",
        id: 57,
        photo: pokemonPhoto,
      },
      {
        name: "growlite",
        id: 58,
        photo: pokemonPhoto,
      },
      {
        name: "stripes",
        id: 59,
        photo: pokemonPhoto,
      },
      {
        name: "bullseye",
        id: 60,
        photo: pokemonPhoto,
      },
      {
        name: "big bullseye",
        id: 61,
        photo: pokemonPhoto,
      },
      {
        name: "ginormous bullseye",
        id: 62,
        photo: pokemonPhoto,
      },
      {
        name: "magicat",
        id: 63,
        photo: pokemonPhoto,
      },
      {
        name: "magicat with spoon",
        id: 64,
        photo: pokemonPhoto,
      },
      {
        name: "magicat with two spoons",
        id: 65,
        photo: pokemonPhoto,
      },
      {
        name: "brobud",
        id: 66,
        photo: pokemonPhoto,
      },
      {
        name: "strongman",
        id: 67,
        photo: pokemonPhoto,
      },
      {
        name: "fourarm strongman",
        id: 68,
        photo: pokemonPhoto,
      },
      {
        name: "floopsprout",
        id: 69,
        photo: pokemonPhoto,
      },
      {
        name: "floopbell",
        id: 70,
        photo: pokemonPhoto,
      },
      {
        name: "victoryfloop",
        id: 71,
        photo: pokemonPhoto,
      },
      {
        name: "baby squidward",
        id: 72,
        photo: pokemonPhoto,
      },
      {
        name: "squidward",
        id: 73,
        photo: pokemonPhoto,
      },
      {
        name: "rockbro",
        id: 74,
        photo: pokemonPhoto,
      },
      {
        name: "rockgymbro",
        id: 75,
        photo: pokemonPhoto,
      },
      {
        name: "rockballer",
        id: 76,
        photo: pokemonPhoto,
      },
      {
        name: "horseonfire",
        id: 77,
        photo: pokemonPhoto,
      },
      {
        name: "regal horseonfire",
        id: 78,
        photo: pokemonPhoto,
      },
      {
        name: "slothy",
        id: 79,
        photo: pokemonPhoto,
      },
      {
        name: "slothyshell",
        id: 80,
        photo: pokemonPhoto,
      },
      {
        name: "science",
        id: 81,
        photo: pokemonPhoto,
      },
      {
        name: "3 sciences",
        id: 82,
        photo: pokemonPhoto,
      },
      {
        name: "birdonion",
        id: 83,
        photo: pokemonPhoto,
      },
      {
        name: "ostribuddies",
        id: 84,
        photo: pokemonPhoto,
      },
      {
        name: "ostriparty",
        id: 85,
        photo: pokemonPhoto,
      },
      {
        name: "BLOMP",
        id: 86,
        photo: pokemonPhoto,
      },
      {
        name: "oh lala",
        id: 87,
        photo: pokemonPhoto,
      },
      {
        name: "i'm melting",
        id: 88,
        photo: pokemonPhoto,
      },
      {
        name: "blargh",
        id: 89,
        photo: pokemonPhoto,
      },
      {
        name: "ocean mop",
        id: 90,
        photo: pokemonPhoto,
      },
      {
        name: "evil pearl",
        id: 91,
        photo: pokemonPhoto,
      },
      {
        name: "farts",
        id: 92,
        photo: pokemonPhoto,
      },
      {
        name: "very visible ghost",
        id: 93,
        photo: pokemonPhoto,
      },
      {
        name: "marble",
        id: 94,
        photo: pokemonPhoto,
      },
      {
        name: "rockworm",
        id: 95,
        photo: pokemonPhoto,
      },
      {
        name: "dip dyed sleepy anteater",
        id: 96,
        photo: pokemonPhoto,
      },
      {
        name: "spooky ick man",
        id: 97,
        photo: pokemonPhoto,
      },
      {
        name: "boneclaw",
        id: 98,
        photo: pokemonPhoto,
      },
      {
        name: "king boneclaw",
        id: 99,
        photo: pokemonPhoto,
      },
      {
        name: "the ball",
        id: 100,
        photo: pokemonPhoto,
      },
      {
        name: "the ball with eyebrows",
        id: 101,
        photo: pokemonPhoto,
      },
      {
        name: "hardboiled",
        id: 102,
        photo: pokemonPhoto,
      },
      {
        name: "palmboys",
        id: 103,
        photo: pokemonPhoto,
      },
      {
        name: "goth dino",
        id: 104,
        photo: pokemonPhoto,
      },
      {
        name: "angry goth dino",
        id: 105,
        photo: pokemonPhoto,
      },
      {
        name: "broken legs",
        id: 106,
        photo: pokemonPhoto,
      },
      {
        name: "boxy",
        id: 107,
        photo: pokemonPhoto,
      },
      {
        name: "slurp",
        id: 108,
        photo: pokemonPhoto,
      },
      {
        name: "multiple farts",
        id: 109,
        photo: pokemonPhoto,
      },
      {
        name: "exponential farts",
        id: 110,
        photo: pokemonPhoto,
      },
      {
        name: "rockballa",
        id: 111,
        photo: pokemonPhoto,
      },
      {
        name: "rockballa ATTACK",
        id: 112,
        photo: pokemonPhoto,
      },
      {
        name: "kangegg",
        id: 113,
        photo: pokemonPhoto,
      },
      {
        name: "yarn",
        id: 114,
        photo: pokemonPhoto,
      },
      {
        name: "kangabang",
        id: 115,
        photo: pokemonPhoto,
      },
      {
        name: "tiny seehorse",
        id: 116,
        photo: pokemonPhoto,
      },
      {
        name: "angry tiny seahorse",
        id: 117,
        photo: pokemonPhoto,
      },
      {
        name: "goldflutter",
        id: 118,
        photo: pokemonPhoto,
      },
      {
        name: "oily goldflutter",
        id: 119,
        photo: pokemonPhoto,
      },
      {
        name: "seastar",
        id: 120,
        photo: pokemonPhoto,
      },
      {
        name: "seabright",
        id: 121,
        photo: pokemonPhoto,
      },
      {
        name: "haunted",
        id: 122,
        photo: pokemonPhoto,
      },
      {
        name: "slash hopper",
        id: 123,
        photo: pokemonPhoto,
      },
      {
        name: "extravaganza",
        id: 124,
        photo: pokemonPhoto,
      },
      {
        name: "buzzit",
        id: 125,
        photo: pokemonPhoto,
      },
      {
        name: "firefan",
        id: 126,
        photo: pokemonPhoto,
      },
      {
        name: "hornteeth",
        id: 127,
        photo: pokemonPhoto,
      },
      {
        name: "taurus",
        id: 128,
        photo: pokemonPhoto,
      },
      {
        name: "bloopfish",
        id: 129,
        photo: pokemonPhoto,
      },
      {
        name: "seadragon",
        id: 130,
        photo: pokemonPhoto,
      },
      {
        name: "sultry shell thing",
        id: 131,
        photo: pokemonPhoto,
      },
      {
        name: "chewing gum",
        id: 132,
        photo: pokemonPhoto,
      },
      {
        name: "cutie",
        id: 133,
        photo: pokemonPhoto,
      },
      {
        name: "excitable seal",
        id: 134,
        photo: pokemonPhoto,
      },
      {
        name: "spikefox",
        id: 135,
        photo: pokemonPhoto,
      },
      {
        name: "firefox",
        id: 136,
        photo: pokemonPhoto,
      },
      {
        name: "origamosaur",
        id: 137,
        photo: pokemonPhoto,
      },
      {
        name: "shellbeard",
        id: 138,
        photo: pokemonPhoto,
      },
      {
        name: "shellteeth",
        id: 139,
        photo: pokemonPhoto,
      },
      {
        name: "void",
        id: 140,
        photo: pokemonPhoto,
      },
      {
        name: "knives for arms",
        id: 141,
        photo: pokemonPhoto,
      },
      {
        name: "hippodactyl",
        id: 142,
        photo: pokemonPhoto,
      },
      {
        name: "sleepybear",
        id: 143,
        photo: pokemonPhoto,
      },
      {
        name: "tail",
        id: 144,
        photo: pokemonPhoto,
      },
      {
        name: "spikybird",
        id: 145,
        photo: pokemonPhoto,
      },
      {
        name: "firebird",
        id: 146,
        photo: pokemonPhoto,
      },
      {
        name: "dratdrat",
        id: 147,
        photo: pokemonPhoto,
      },
      {
        name: "useless dragon",
        id: 148,
        photo: pokemonPhoto,
      },
      {
        name: "middle aged chaurasaur",
        id: 149,
        photo: pokemonPhoto,
      },
      {
        name: "moomooo",
        id: 150,
        photo: pokemonPhoto,
      },
    ];







//    let i = Math.floor(Math.random() * 150) + 1;

  function pokemonPhotoFunction(pokemonList, i) {
        pokemonList.forEach((pokemon) => {
            if (pokemon.id === i) {

            let img = document.createElement("img");
            img.classList.add('card__js-photo')
//            let name = document.createElement("h1");
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`).then((response)=>{
                img.src = response.data.sprites.front_default;
            })

//            img.alt = "Pokemon Photo";

//            name.innerText = pokemon.name;

            photoAndNameHolder.appendChild(img);
//            photoAndNameHolder.appendChild(name);


            }
        })
    }
//    let i = Math.floor(Math.random() * 150) + 1;

    function pokemonNameFunction(pokemonList, i) {
      pokemonList.forEach((pokemon) => {
          if (pokemon.id === i) {
          let name = document.createElement("h1");
          name.classList.add("card__js-name");
          name.innerText = pokemon.name;
          photoAndNameHolder.appendChild(name);
          }
      })
  }

    let skipButton = document.querySelector(".form__skip");
    skipButton.addEventListener("click", () => {
        photoAndNameHolder.innerHTML = "";
        let i = Math.floor(Math.random() * 150) + 1;
        pokemonPhotoFunction(pokemonList, i);
        cardGifImage.src = " ";
    });
 

  let submitButton = document.querySelector(".form__submit");
  submitButton.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 150) + 1;
    pokemonNameFunction(pokemonList, i);
  });

});