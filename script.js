console.log('loaded')

/* Megkeres a selectorral egy elemet a HTML oldalunkon: */
/* Stringkent kell megadni, ha div akkor meg keresi az elso divc elemet, ha .button-al adjuk meg akkor megkeresi a legelso div-et a button classal, ha #root --> barmelyik elemen van, az elsot visszaadja */
/* most a root elemet ragadom meg : */
/* amit visszaad, celszeru valtozoba kimenteni let rootElement */
let rootElement = document.querySelector('#root')
/* igy benne lesz a HTML-ben az element amit megtalal */
/* kilogolom consol segitségével */
/* console.log(rootElement) */
/* HTML-be a script-hez beadtam a refer-t, ez azert kell mert kulonben a script tul gyorsan lefut, de a defer altal a html vegere helyezi a kodot, igy a body utan fut le a script-es kodom es akkor megtalalja a javascriptes elemet */
/* a kovetkezo kod HTML kodot illeszt be az elembe, position es text parametereket var. Positionnak elore megadott ertekeket tudunk megadni '' jelben, 4 opciobol tudok valasztani. 2. parameternekstringet var */
 /* 2. parameternel ha ide irjuk nem kapukn kodkiegeszitest */
// rootElement.insertAdjacentHTML('beforeend', "<h2> Hello world, my name is Istvan </h2>")
/* DOM manipulaltunk */
/* HTML string valtozoba kimentese: */
/* let htmlContent = "<h2> Hello world, my name is Istvan </h2>" */
/* ezt rakom be utana a 14 es sor 2-ik parameterebe */
/* rootElement.insertAdjacentHTML('beforeend', "<h2> Hello world, my name is Istvan </h2>")
rootElement.insertAdjacentHTML('beforeend', htmlContent )
rootElement.insertAdjacentHTML('beforeend', htmlContent ") */
/* amikor egy kodott tobbszor futtatunk le, ciklusoknak hivjuk, szamlalo segitsegevel tudjuk a legegyszerubben: */
/* let counter = 0; */

/* elindul w hile ciklus csekkolja a kondiciot, utana megint lefut, counter = counter +1 helyett counter++ (eggyel noveli ac ounter erteket) */
/* while(counter < 20) {
  rootElement.insertAdjacentHTML('beforeend', htmlContent )
  counter++ ;
} */

/* for negyzetet kivalaszt es kiadja ezt. For ciklus: kell egy kezdoertek egy valtozoval, adunk egy feltetelt amit mindig lecsekkol minden futas utan, minden futas vegen lefuttat egy kodot ami megvaltoztatja a valtozot */
/* most tizig futtatom  */
/* for (let counter = 1; counter <= 10; counter++) {
  console.log(counter)
} */
/* minden egyes iteracioban ( ciklusnak iteracioi vannak) fusson le a kod amit megirtunk: */
/* for (let counter = 1; counter <= 10; counter++) {
  rootElement.insertAdjacentHTML('beforeend', htmlContent )
} */
  /* a for ciklust hasznaljuk most, nem a whilet, pl a for jo hogy egy tombon vegigmenjunk, kiirjuk az ertekeit */

/*   let array = ["alma", "körte", "szilva", "eper", "birs", "vegyes"]
  for (let counter = 1; counter <= 10; counter++) {
    rootElement.insertAdjacentHTML('beforeend', `<h2> ${array[0]}</h2>` )
  } */
  /* az elobb kiirattam a tomb egyik elemet 10 szer */

  /*  indexek:    0       1         2         3     4         5  */
/*   let array = ["alma", "körte", "szilva", "eper", "birs", "vegyes"]
  for (let index = 0; index < array.length; index++) {
    rootElement.insertAdjacentHTML('beforeend', `<h2> ${array[0]}</h2>` );
  } */
  /* az előző koddal az index értékét használtuk fel. Ott van egy tömbünk aminek van x eleme (most 7 eleme  0-tól 6-ig). Az összes elemét fel akarjuk használni. Ciklust indítunk, megmondjuk neki hogy 0-tól induljon és az iteraciok addig mennek amiíg kisebb mint az array hossza (most 7 a hossza) és minden iteráció végén növelje az értéket eggyel. H2 tagben jelenjen meg az array indexedik eleme */