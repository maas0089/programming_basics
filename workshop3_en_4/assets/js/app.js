// Opdrachten bij workshop 3

/*Opdracht 1: ik genereer een willekeurig getal tussen 0 en 500.
Vervolgens laat ik met een console.log zien welk getal is gegenereerd.
Daarna geef ik met de % operator aan of het getal even of oneven is. 
Door het getal te delen door 2, zal de restwaarde altijd 1 of 0 zijn. 
Is de restwaarde 0, dan komt er true te staan en is het dus een even getal.
Is de restwaarde 1, dan komt er false te staan en is het dus een oneven getal.*/

console.log('opdracht 3.1');
const randomNumber = Math.round(Math.random() * 500);
console.log(`is ${randomNumber} een even getal?`);
console.log((randomNumber % 2) == 0);

/*Opdracht 2: ik maak een variable aan met de aangegeven string. 
Ik laat de ongewijzigde zin zien in de console. 
Vervolgens vervang ik het woord 'not' (plus een spatie) met niks. 
Hierdoor is het woord verwijderd.*/

console.log('opdracht 3.2');
let coolSentence = 'Programming is not so cool.';
console.log(coolSentence);
console.log(coolSentence.replace('not ', ''))

/*Opdracht 3: ik vergelijk het getal 1400 met de aangegeven string.
Dit is eigenlijk niet mogelijk, omdat je met een string geen vergelijking kan maken.
De console zal in dit geval bij elke vergelijking 'false' aangeven. */

console.log('opdracht 3.3');
console.log(`Is het getal 1400 groter dan de string "Ik woon in Naboo"?`);
console.log(1400 > "Ik woon in Naboo.");



//Opdrachten bij workshop 4

/*Opdracht 1: Ik genereer een willekeurig getal tussen 0 en 10, afgerond op 1 decimaal (met toPrecision).
Ik laat zien welk cijfer is gegenereerd. Vervolgens geef ik met de if-else statement aan hoe goed dit cijfer is.*/
console.log('opdracht 4.1');
const grade = (Math.random() * 10).toPrecision(2);
console.log(`Je cijfer is: ${grade}`);
if (grade < 6) {
    console.log('Het is een onvoldoende...');
}
else if (grade >= 6 && grade < 7) {
    console.log('Dit is voldoende.');
}
else if (grade >= 7 && grade < 9) {
    console.log('Dit is goed!');
}
else if (grade >= 9) {
    console.log('Dit is uitmuntend!');
}
else {
    console.error('Dit cijfer is niet mogelijk.');
}

/*Opdracht 2: Ik heb op dezelfde manier als in opdracht 1 een getal gegenereerd en laten zien.
De switch statement werkt alleen wanneer de switch overeenkomt met de case.
Omdat ik niet weet welk getal eruit komt, zet ik de switch op 'true' en vergelijk ik in de case
het cijfer. De opdracht bij de case waar 'true' uit komt, wordt dan uitgevoerd.*/
console.log('Opdracht4.2')
const switchGrade = (Math.random() * 10).toPrecision(2);
console.log(`Je cijfer is: ${switchGrade}`)
switch (true) {

    case (switchGrade < 6):
        console.log('Het is een onvoldoende...');
        break;

    case (switchGrade >= 6 && switchGrade < 7):
        console.log('Dit is voldoende.');
        break;

    case (switchGrade >= 7 && switchGrade < 9):
        console.log('Dit is goed!');
        break;

    case (switchGrade >= 9):
        console.log('Dit is uitmuntend!');
        break;

    default:
        console.error('Dit cijfer is niet mogelijk.')
}

/*Opdracht 3: Ik geef eerst met een console.log aan welke waarden waar zijn.
Vervolgens heb ik voor elke mogelijkheid een if-else statement gemaakt waar een passende zin bij staat.*/
console.log('Opdracht 4.3');
const purchasedBook = true;
const job = 'teacher';
const inTrain = false;
console.log(`Am I a teacher? ${job == 'teacher'}. Did I purchase a book? ${purchasedBook}. Am I in a train? ${inTrain}.`);
if (purchasedBook == true && inTrain == true && job == 'teacher') {
    console.log('Finally I can enjoy my book!');
}
else if (purchasedBook == false && inTrain == true && job == 'teacher') {
    console.log('If only I had a book to read right now!');
}
else if (purchasedBook == false && inTrain == false && job == 'teacher') {
    console.log('I\'m just a teacher.');
}
else if (purchasedBook == false && inTrain == false && job != 'teacher') {
    console.log('I\'m nobody really.');
}
else if (purchasedBook == false && inTrain == true && job != 'teacher') {
    console.log('I don\'t need a book. I am listening to music in the train.');
}
else if (purchasedBook == true && inTrain == false && job == 'teacher') {
    console.log('I don\'t have time to read right now!');
}
else if (purchasedBook == true && inTrain == false && job != 'teacher') {
    console.log('I have no reason or time to read this book.');
}
else if (purchasedBook == true && inTrain == true && job != 'teacher') {
    console.log('I don\'t like this book.');
}
else {
    console.error('Who am I ?!')
}