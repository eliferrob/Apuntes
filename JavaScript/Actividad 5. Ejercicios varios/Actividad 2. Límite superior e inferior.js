/*2. Escribe un programa que pida el limite inferior y superior de un intervalo. Si el límite inferior es
mayor que el superior lo tiene que volver a pedir. A continuación se van introduciendo números
hasta que introduzcamos el 0.

Cuando termine el programa dará las siguientes informaciones:
* La suma de los números que están dentro del intervalo (se incluyen los números).
* Cuantos números están fuera del intervalo.
* He informa si hemos introducido algún número igual a los límites del intervalo.

*/
var n = 1, upperLimit = 0, lowerLimit = 0, sumInside = 0, countOutside = 0, countEquals = 0;

// Pedir los límites correctamente
while(lowerLimit >= upperLimit){
    lowerLimit = parseInt(prompt("Introduce el límite inferior de un intervalo: "));
    upperLimit = parseInt(prompt("Introduce el límite superior de un intervalo: "));
    if(lowerLimit >= upperLimit) {
        alert("Los valores no son correctos. Por favor, introdúcelos de nuevo.");
    }
}

// Pedir números hasta que el usuario introduzca 0
while(n != 0) {
    n = parseInt(prompt("Introduce un número (escribe 0 para detener el bucle): "));
    if(n != 0) {
        if(n < upperLimit && n > lowerLimit) {
        sumInside++;
        }
        if(n > upperLimit || n < lowerLimit) {
        countOutside++;  
        }
        if(n == upperLimit || n == lowerLimit) {
        countEquals++;
        }
    }
}

alert("Total de números dentro del intervalo: " + sumInside  + ". Total de números fuera: " + countOutside + ". Total de números iguales que los límites: " + countEquals)