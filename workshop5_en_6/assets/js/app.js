// Workshop 5

/* opdracht 1: via de while loop stel ik de limiet van myNumbers op 25.
Vervolgens kan ik met een if statement controleren of myNumbers deelbaar is door 4.
Daarna haal ik myNumbers met 1 omhoog en herhaalt het proces zich tot de limiet is bereikt. */

console.log('Opdracht 5.1');
let myNumbers = 1;
while (myNumbers <= 25) {   
    if (myNumbers % 4 == 0) {   
        console.log(`${myNumbers} is deelbaar door 4.`);
    }
    else {
        console.error(`${myNumbers} is niet deelbaar door 4.`);
    }
    myNumbers++;
}

/* opdracht 2: ik stel 2 variabelen in die ik kan gebruiken om de fibonacci reeks te berekenen.
Ik stel de limiet op 1000000. Ik tel de twee variabelen bij elkaar op en laat het resultaat zien.
Daarna verander ik het eerste getal naar dit resultaat. Ik tel de twee weer bij elkaar op.
Daarna verander ik het tweede getal naar dit resultaat. Het proces herhaalt zich tot de limiet is bereikt.
Op deze manier sla je altijd de laatste 2 resultaten apart op en telt ze weer bij elkaar op.
Vóór de while loop log ik al een keer het resultaat van de twee variabelen, zodat de reeks correct is. */ 

console.log('Opdracht 5.2');
let firstNumber = 0;
let secondNumber = 1;

console.log(firstNumber + secondNumber);
while (firstNumber + secondNumber < 1000000) {
    console.log(firstNumber + secondNumber);
    firstNumber += secondNumber;
    console.log(firstNumber + secondNumber);
    secondNumber += firstNumber;
}


/* Opdracht 3: ik maak een nieuwe variable aan waar ik de som van de array in ga berekenen.
Via de for loop ga ik langs elk getal in de array en tel ik dit bij sumOfArray op.
Ik log het resultaat. */

console.log('Opdracht 5.3')
const array = [2, 4, 8, 9, 12, 13];
let sumOfArray = 0;
for (let index = 0; index < array.length; index++) {
    sumOfArray += array[index];
}
console.log(`De som van ${array} is: ${sumOfArray}`);


// Workshop 6

/* Opdracht 1: De functie bevat eigenlijk dezelfde code als in opdracht 5.2.
Het verschil is dat ik 'fibonacciLimit' als parameter heb ingesteld, zodat je 
zelf de limiet kan instellen als je de functie uitvoert. */

console.log('Opdracht 6.1'); 
function myFibonacci(fibonacciLimit){
    let first = 0;
    let second = 1;
    console.log(`De fibonacci reeks tot ${fibonacciLimit} is:`)
    console.log(first + second);
    while (first + second < fibonacciLimit){
        console.log(first + second);
        first += second;
        console.log(first + second);
        second += first;
    }
}
myFibonacci(100000);

/* Opdracht 2: Deze functie heeft 'counting' en 'currentYear' als parameter.
Hiermee kan je aangeven vanaf waar je wilt aftellen en welk jaar het is.
Als 'counting' op 0 komt, wordt de while statement nog 1 keer uitgevoerd waarna deze eindigt.
Daarna verschijnt 'Happy [currentyear]!' op de console. */

console.log('Opdracht 6.2');
function countDown(counting, currentYear){
    while(counting >=0){
        console.log(counting);
        counting--;
    }
    console.log(`Happy ${currentYear}!`);
    
}
countDown(10, 1994);

/* Opdracht 3: Hoisting is dat een declaratie 'naar boven' wordt gehaald. 
Hierdoor kan je een functie of variabele gebruiken voordat deze gedeclareerd is. Bij een expressie gebeurt dit niet. 
Ik probeer beide functies op te roepen voordat ik ze heb uitgewerkt. De eerste functie is gedeclareerd en werkt dus wel.
De tweede functie is een expressie en wordt niet gehoist. Deze kan niet op deze manier worden uitgevoerd. */

console.log('Opdracht 6.3');

aboutHoisting();
function aboutHoisting(){
    console.log('Dit werkt dankzij hoisting.');
}

notAboutHoisting();
let notAboutHoisting = function(){
    console.log('Dit werkt niet.');
}