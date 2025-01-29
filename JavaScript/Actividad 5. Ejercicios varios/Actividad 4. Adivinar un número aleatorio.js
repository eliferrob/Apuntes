/*4.- Realiza un algoritmo que permita adivinar un número. La aplicación genera un número
aleatorio del 1 al 100. A continuación va pidiendo números y va respondiendo si el número a
adivinar es mayor o menor que el introducido y los intentos que te quedan (tienes 10 intentos para
acertarlo).

El programa termina cuando se acierta el número (además te dice en cuantos intentos lo has
acertado), si se llega al limite de intentos (no has acertado) te muestra el número que había
generado.
*/

var guessedNumber = 0, attemptsLeft = 10;
var randomNumber = Math.floor(Math.random()*100);


while((guessedNumber != randomNumber) && (attemptsLeft != 0)) {
    guessedNumber = parseInt(prompt("Introduzca un número:"));
    if(guessedNumber > randomNumber) {
        attemptsLeft--;
        alert("El número que has introducido es mayor. Tienes " + attemptsLeft + " intento(s).");
    }
    if(guessedNumber < randomNumber) {
        attemptsLeft--;
        alert("El número que has introducido es menor. Tienes " + attemptsLeft + " intento(s).");
    }
}

if(attemptsLeft == 0) {
    alert("Has perdido... El número era " + randomNumber);
}
else {
    alert("¡Enhorabuena! El número era " + randomNumber + ". Lo has adivinado en " + (10 - attemptsLeft) + " intento(s).")
}