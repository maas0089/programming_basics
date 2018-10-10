/*Workshop 9 */

/*Opdracht 1*/

function calcAverage() {

    /*Ik selecteer alle laatste td elementen van elke tr. Dit is eigenlijk een slechte methode, 
    omdat het van toepassing is op alle tr elementen in de html.*/
    const elements = document.querySelectorAll('tr>td:last-child');

    //Ik tel elk cijfer bij elkaar op (ik converteer de cijfers eerst van string naar int).
    let grade = 0;
    elements.forEach(function (element) {
        grade += parseInt(element.innerText);
    })
    //Het gemiddelde wordt berekend door het totaal te delen door het aantal elementen.
    const average = grade/elements.length;

    //Ik voeg een nieuwe tr en 2 td's toe aan de tabel. 
    const myTable = document.getElementById('courseTable');
    const myNewRow = myTable.insertRow();
    const myText = myNewRow.insertCell();
    const myAverage = myNewRow.insertCell();

    //De 2 td's geef ik deze inhoud.
    myText.innerText = 'Gemiddeld'
    myAverage.innerText = average;
}
calcAverage();

/*Opdracht 2*/

//Ik maak een functie die op elke class toepasbaar is.
function addClassEven(someClass){

//Ik selecteer alle even child elementen van de class
const classEven = document.querySelectorAll(`.${someClass} :nth-child(even)`);

//Ik voeg aan elk element een class toe. Deze verandert de achtergrondkleur in CSS
classEven.forEach(function(element){
    element.classList.add('classEven');
})
}
addClassEven('course');

/*Opdracht 3*/

function createImageElement(imageSrcName){
    //Ik selecteer de locatie waar de afbeelding moet komen te staan
    const image_container = document.getElementById('image_container');

    //Ik maak een nieuwe afbeelding aan
    const image = document.createElement('img');

    //Ik voeg attributes toe aan de afbeelding
    image.src = imageSrcName;
    image.alt = 'Dit is een afbeelding.'

    //Ik voeg de afbeelding toe aan het DOM
    image_container.appendChild(image);
} 
createImageElement('https://picsum.photos/200/?random')