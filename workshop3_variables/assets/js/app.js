/*Opdracht 1: ik genereer een willekeurig getal tussen 0 en 500.
Vervolgens laat ik met een console.log zien welk getal is gegenereerd.
Daarna geef ik met de % operator aan of het getal even of oneven is. 
Door het getal te delen door 2, zal de restwaarde altijd 1 of 0 zijn. 
Is de restwaarde 0, dan komt er true te staan en is het dus een even getal.
Is de restwaarde 1, dan komt er false te staan en is het dus een oneven getal.*/

const randomNumber = Math.floor(Math.random() * 500);
console.log(`is ${randomNumber} een even getal?`);
console.log((randomNumber % 2) == 0);

/*Opdracht 2: ik maak een variable aan met de aangegeven string. 
Ik laat de ongewijzigde zin zien in de console. 
Vervolgens vervang ik het woord 'not' (plus een spatie) met niks. 
Hierdoor is het woord verwijderd.*/

let coolSentence = 'Programming is not so cool';
console.log(coolSentence);
console.log(coolSentence.replace('not ', ''))

/*Opdracht 3: ik vergelijk het getal 1400 met de aangegeven string.
Dit is eigenlijk niet mogelijk, omdat je met een string geen vergelijking kan maken.
De console zal in dit geval bij elke vergelijking 'false' aangeven. */

console.log(`Is het getal 1400 groter dan de string "Ik woon in Naboo"?`)
console.log(1400 > "Ik woon in Naboo");

