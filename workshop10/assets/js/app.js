/*Workshop 10*/

/*Opdracht 1*/

//Selecteer een element en voeg er een eventlistener aan toe
const clickerButton = document.getElementById('clickerButton');
clickerButton.addEventListener('click', clickerGame);

//Deze variabelen kan ik gebruiken in mijn functie
let counter = 0
let fontSize = 50;

function clickerGame() {

    //Selecteer het nummer en tel 1 op bij elke click
    const number = document.getElementById('number');
    number.innerText = +number.innerText + 1;

    //Tel ook 1 op bij counter, deze gebruik je voor de if-statement
    counter += 1;

    if (counter == 10) {
        //Reset counter zodat de if statement telkens opnieuw bereikt kan worden
        counter = 0;

        //Verlaag de fontSize met 5 en pas dit toe op de knop
        fontSize -= 5;
        clickerButton.style.fontSize = `${fontSize}px`;

        //Console.log om te controleren of de if-statement steeds opnieuw wordt bereikt
        console.log('reached another 10');
    }
}


/*Opdracht 2*/

//Selecteer het element waar een eventlistener aan moet worden toegevoegd
const groceries = document.getElementById('groceryInput');
groceries.addEventListener('click', addGroceries);

function addGroceries(event) {
    //preventDefault, zodat de pagina niet wordt herladen bij het invoeren van een product
    event.preventDefault();

    //Selecteer de tabel waar je producten bij komen te staan en de cel waar de totaalprijs komt te staan
    const groceryTable = document.getElementById('groceryTable')
    let totalPrice = document.getElementById('totalPrice');

    //Haal de waardes op die door de gebruiker zijn ingevuld
    const groceryName = document.getElementById('groceryName').value;
    const groceryPrice = document.getElementById('groceryPrice').value;

    //Creëer een nieuwe rij met cellen
    const groceryRow = document.createElement('tr');
    const nameData = document.createElement('td');
    const priceData = document.createElement('td');

    //Voeg de waardes toe aan de inhoud van de cellen
    nameData.innerText = groceryName;
    priceData.innerText = `€${(+groceryPrice).toFixed(2)}`;

    //Maak een extra cel waar de verwijder-knop komt te staan (deze heb ik niet werkend gekregen)
    const deleteData = document.createElement('td');
    deleteData.innerText = 'Verwijderen';

    //Als een veld niet is ingevoerd, geef dan een melding
    if (groceryName == '' || groceryPrice == '') {
        alert('Please enter a product and its price.')
    }

    //Als beide velden zijn ingevuld, voeg dan de gegevens toe aan de tabel
    else {
        groceryTable.appendChild(groceryRow);
        groceryRow.appendChild(nameData);
        groceryRow.appendChild(priceData);
        groceryRow.appendChild(deleteData);

        //Bereken de totaalprijs
        totalPrice.innerText = (+totalPrice.innerText + +groceryPrice).toFixed(2);
    }
}
