/*3.- Escribe un programa que dados dos números, uno real (base) y un entero positivo (exponente),
saque por pantalla el resultado de la potencia. No se puede utilizar el operador de potencia.
*/
var base, exponent, count, result;

base = parseInt(prompt("Introduzca una base: "));
exponent = parseInt(prompt("Introduzca un exponente (número positivo): "));

if (exponent < 0) {
    alert("Error. El exponente debe ser un número entero positivo.");
} else {
    result = 1; 
    for (count = 1; count <= exponent; count++) {
        result = result * base;
    }
    alert("El resultado de " + base + " elevado a " + exponent + " es: " + result);
}