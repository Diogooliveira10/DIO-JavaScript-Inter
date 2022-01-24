// hoisting 
/*
numberOne = 1;

console.log(numberOne + 2);

var numberOne;
*/

/*
var firstName = "João";
var lastName = "Souza";

if (firstName === "João") {
    var firstName = "Pedro";
    let lastName = "Silva";
}

console.log(firstName, lastName);
// Pedro Souza
*/

var firstName = "João";
var lastName = "Souza";

if (firstName === "João") {
    let lastName = "Rodrigues"
    var firstName = "Pedro";
    lastName = "Silva"; // Reatribuir

    console.log(lastName);
}

console.log(firstName, lastName);
// Silva
// Pedro Souza