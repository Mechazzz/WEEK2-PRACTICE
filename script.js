function logger(kismacska) {
    /* let kismacska = 'hello' */
    console.log(kismacska)
}

logger('hello'); /* letrehoz egy kismacska nevu valtozot es ennekj az erteke egyenlo lesz azzal amit atadok neki amikor meghivtam a fuggvenyt */

function logTheSumOfTwoNumbers (x, y) { /* camelCase */
/* let x = 1 */
/* letY = 2 */
console.log(x + y);
}

logTheSumOfTwoNumbers (1, 2);

function sumOfTwoNumbers (x, y) {
    let sum = 0;
    sum = x + y;

    return sum;
}

logger (sumOfTwoNumbers(10, 5));