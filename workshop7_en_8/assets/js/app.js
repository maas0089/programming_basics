/*Workshop 7*/

/*Opdracht 1: Ik maak een functie met myArray als parameter, waardoor ik de functie voor elke array kan gebruiken.
Ik genereer een indexwaarde via Math.random en zorg ervoor dat het een heel getal is via Math.round.
vervolgens bepaal ik welke waarde op de gegenereerde index staat en ik laat dit zien.*/

console.log('Opdracht 7.1');
const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
function pickRandom(myArray){
    const randomIndex = Math.round(Math.random() * myArray.length);
    const randomValue = myArray[randomIndex];
    console.log(`het getal op index ${randomIndex} is: ${randomValue}`);
}
pickRandom(lapRounds);


/*Opdracht 2: met een dubbele for-loop kan ik langs elke indexwaarde in elke sub-array gaan.
Hiermee kan ik elke waarde apart loggen.*/

console.log('Opdracht 7.2');
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
 ];
function returnAllRecords(myArray){
    for (let i = 0; i < myArray.length; i++) {
        for (let j = 0; j < myArray[i].length; j++) {
            console.log(myArray[i][j]);
        }
        
    }
} 
returnAllRecords(allMyRecords);


/*Opdracht 3: de functie filteredLapRoundsWithForLoop is gegeven. De functie filteredWithFilter heb ik gemaakt.
De .filter functie werkt beter, omdat deze zelf een nieuwe array aanmaakt met alleen de waardes uit de gegeven
array waarbij 'true' uit de gegeven functie komt. */

console.log('Opdracht 7.3');
const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {
 
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
 }

 function filteredWithFilter(value){
     return value < 4;
 }
 console.table(lapRounds.filter(filteredWithFilter));



 /*Workshop 8*/

 /*Opdracht 1*/
 console.log('Opdracht 8.1');
 const otherLapRounds = {
     lap1: 55.99,  
     lap2: 63.00, 
     lap3: 63.01, 
     lap4: 54.01, 
     lap5: 62.79, 
     lap6: 52.88, 
     lap7: 53.10, 
     lap8: 54.12
 }
 console.table(otherLapRounds);
 console.log(`Check: otherLapRounds is een: ${typeof(otherLapRounds)}`);
 console.log('De array is omgezet naar een object. Hierbij is telkens lap[#] een key.') // Dit is het antwoord.

 /*Opdracht 2: elk object valt binnen één indexwaarde in de array.
 Daarom kan ik met een for-loop langs elk object gaan, en de betreffende properties aanroepen.*/

 console.log('Opdracht 8.2');
 const teachers = [
    {
        name: 'Loek',
        profession: 'Teacher',
        brand: 'Linux'
    },
    {
        name: 'Daan',
        profession: 'Teacher',
        brand: 'Arduino'
    },
    {
        name: 'Rimmert',
        profession: 'Teacher',
        brand: 'Apple'
    }
]
for (let index = 0; index < teachers.length; index++) {
    console.log(`I have a ${teachers[index].profession} named ${teachers[index].name} and he likes to work on a(n) ${teachers[index].brand} computer.`);    
}

/*Opdracht 3: ik voeg aan elk object een hoursPerWeek en een salary property toe.
Vervolgens maak ik een functie die met een for-loop van elke leraar apart logt wat het uurloon is.
Ik voeg de functie toe met .push. Vervolgens voer ik die uit door de betreffende indexwaarde van teachers aan te roepen.

Deze opdracht is lastig, omdat teachers een array is met daarin een aantal objecten.
Als teachers een object was, was het makkelijker om er een functie aan toe te voegen en om deze weer aan te roepen.*/

console.log('Opdracht 8.3');

teachers[0].hoursPerWeek = 50;
teachers[0].salary = 500;
teachers[1].hoursPerWeek = 60;
teachers[1].salary = 750;
teachers[2].hoursPerWeek = 55;
teachers[2].salary = 800;
salaryPerHour = function(){
    for (let index = 0; index < teachers.length - 1; index++) {
        let calcSalary = (teachers[index].salary / teachers[index].hoursPerWeek).toPrecision(4);
        console.log(`My ${teachers[index].profession} ${teachers[index].name} makes $${calcSalary} an hour. `);        
    }
}
teachers.push(salaryPerHour);
teachers[3]();