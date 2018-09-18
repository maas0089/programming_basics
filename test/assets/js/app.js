const currentAction = 'booleans';
if (currentAction == 'calculating'){
    const a = 9, b = 3;
    console.log('in "calculating"')
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
}
else if (currentAction == 'Strings'){
    console.log('in "Strings"')
    console.log (currentAction.toUpperCase());
    console.log (currentAction.length);
    console.log (currentAction.match('String'));
    console.log (currentAction.substring(3, 7));
    console.log (currentAction.charAt(4));

}
else if (currentAction == 'booleans'){
    console.log('in "booleans"')
    const grade = Math.floor(Math.random()*11);
    console.log(grade)
    if (grade  <= 5){
        console.log('het is een onvoldoende');
    }
    else if (grade <= 10){
        console.log('het is een voldoende');
    }
    else {
        console.log('dit cijfer is niet mogelijk')
    }

}
else {
    console.error('waarde onbekend')
}