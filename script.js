let stringVariable = "text";
let numberVariable = 15;
let booleanVariable = true;

function myFunc(param1, param2) {
  return param1 + param2;
}

console.log(stringVariable); /* valtozo neve */
console.log("stringVariable"); /* ez egy érték */

console.log(stringVariable, numberVariable, booleanVariable);

/* A tomb egy rendezett lista szamit a sorrenmdje a benne levo ertekeknek.
Mar nem egy primitiv, tobb kulonbozo adatot tartalmaz
Tomb : */
let array = ["alma", 12, false, undefined, null];

console.log(array);

/* indexek               0            1            2                 3  */
let stringArray = ["Imola Ács", "Pali Herrer", "Nagy Zsombor", "Ágota Bokor"];
console.log(stringArray);
console.log(
  stringArray[0]
); /* index a 0 , eszerint jeleniti meg a dolgokat a fuggveny, 0 tol indulnek az indexek*/

/* Objektum, az objektum jele a kapcsos zarojel. AZ  objektumban nem csak adatok vannak felsorolva, hanem kulcs-ertek parok */
let myObj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: 15,
  key5: 600,
  key6: true,
  key7: ["Imola Ács", "Pali Herrer", "Nagy Zsombor", "Ágota Bokor"],
};

console.log(myObj);
/* . notationnal erjuk el a leggyorsabban a kulcsok ertekeit. */
console.log(myObj.key7);
console.log(myObj.key7[2]);

let myFacebook = {
  name: "Bakó István",
  age: 29,
  location: "Budapest",
  friends: ["Gipsz Jakab", "John Doe", "Példa Péter"],
  favouriteFilms: [
    {
      title: "Harry Potter",
      year: 2001,
      characters: ["Harry Potter", "Ronald Weasley", "Hedvig"],
    },
    {
      title: "Ananász Express",
      year: 2012,
      characters: ["Seth Rogen", "Péter"],
    },
    {
      title: "Üvegtigris",
      year: 2004,
      characters: ["Józsi", "Béla"],
    },
  ],
};

console.log(myFacebook.favouriteFilms[0].characters[1]);
/* Ha objektumbol akarok kulcsot megkapni : dot notation . Ha tombbel ter vissza a fuggveny akkor szogletes zarojel. Ha objektummal ter vissza akkor dot notation, ha tombbel akkor szogletes zarojel */

let myArr = [
  ["Alma", "Körte", "Szilva"],
  ["Dreher", "Kőbányai", "Kanizsai sör"],
  ["Mizse", "Szentkirályi", "Tesco gazd"],
];

console.log(myArr[1][2]);

/* Hazi fuzetben */


/* Feltetelek */
function negativOrPositive (number) {
    if (number < 0) {
        return "negative"
    } else if (number > 0) {
        return "positive"
    } else {
        return "zero"
    }
}   

function logger(text) {
    console.log(text)
}

logger(negativOrPositive(0))

function decideIfBeerIsGood (beer) {
    /* beer = [name: "Dreher", price: 349, abv:5] */
    /* ha && (es) jel van akkor mindket feltetelnek teljesulnie kell vagy nem teljesul */
    /* ha || (vagy jel) ha az egyik feltetel teljesul az mar eleg, akkor igaz az allitas */
    /* Fontos hogy sorrendben nézi a feltételeket a js, csak akkor nezi meg a következöt ha az elözö nem teljesül. ha barhol tallakozik a return szoval akkor vege a fuggvenynek */
    if (beer.price < 340 && beer.abv > 4.7) {
        return beer.name + ": jo sor mert olcso es ut"
    } else if (beer.price < 340) {
        return beer.name + ": jo sor mert olcso"
    } else if (beer.abv > 4.7) {
        return beer.name + ": jo sor mert ut"
    } else {
        return beer.name + ": nem jo"
    }

}

let dreher = {name: "Dreher", price: 349, abv:5 }
let soproni ={name: "Soproni", price: 329, abv: 4.5 } 
let borsodi= {name: "Borsodi", price: 339, abv: 4.8 }
let pécsi = {name:"Pécsi", price: 379, abv:4.2 }

logger(decideIfBeerIsGood(dreher))
logger(decideIfBeerIsGood(soproni))
logger(decideIfBeerIsGood(borsodi))
logger(decideIfBeerIsGood(pécsi))