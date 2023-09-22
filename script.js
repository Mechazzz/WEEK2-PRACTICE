console.log('loaded')

let rootElement = document.querySelector('#root')

/* fetch: Javascript nem várja meg hogy a fetch lefusson, háttérben fut, folyik a kommunikacio, valamikor jön a válasz, de a javascript futasa nem áll meg. De emellett tudom használni a weboldalt. */
/* a .then rész akkor fog lefutni amikor megjött a válasz. A következő függvénnyel ki konzol logolom a választ */
fetch('https://restcountries.com/v3.1/all').then(function (response) {
  return response.json() /* ezzel kicsomagolja az infót */
})
.then(function (data) {
  console.log(data) /* valodi adat letezik, itt tudunk a kapott adattal dolgozni */
                            /* A Data  egy 250 elemből álló array */ /* most DOm manipulacioval beillesztjuk az orszagok nevét a HTML-ünkbe */
  for (let index = 0;index < data.length; index++){
    let countryName = data[index].name.common
    let countryPop = data[index].population
    let countryArea = data[index].area


    rootElement.insertAdjacentHTML('beforeend', `
    <div class = "country">
      <h2> ${countryName} </h2>
      <p> population: ${countryPop} </p>
      <p> are: ${countryArea}m2 </p>
    </div>
    `
    )
    /* A countryName-t nem latom kivulrol, igy ez csak ebben a kapcsos zárojelben felhasználható. Kivul nem tudom felhasznalni */
  }
})
/* a fetchnek ket .then kell */
/* javascriptesítem json-al. A böngésző konzoljába promise-t kapok, ami az hogy jönni fog adat */

/* FETCH LINK: https://restcountries.com/ */