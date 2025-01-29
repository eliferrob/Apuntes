// 8. Realizar un programa que lea una cadena por teclado y convierta las mayúsculas a minúsculas y viceversa.

var initialString, finalString = "",cont = 0;

initialString = prompt("Introduce una cadena con mayúsculas y minúsculas: ");

while(cont < initialString.length){
    if(initialString[cont] == initialString[cont].toUpperCase()) {
        finalString = finalString + initialString[cont].toLowerCase();
    }
    else {
        finalString = finalString + initialString[cont].toUpperCase();
    }
    cont++;
}

alert(finalString);