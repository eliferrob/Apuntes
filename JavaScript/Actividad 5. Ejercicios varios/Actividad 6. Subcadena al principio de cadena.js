// 6. Realizar un programa que comprueba si una cadena leída por teclado comienza por una subcadena introducida por teclado.

var string, substring;

// Solicitar la cadena y la subcadena
string = prompt("Introduce una cadena: ");
substring = prompt("Introduce una subcadena: ");

// Comprobar si la cadena comienza con la subcadena
if (string.startsWith(substring)) {
    alert("La subcadena está al principio de la cadena.");
} else {
    alert("La subcadena no está al principio de la cadena.");
}