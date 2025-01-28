// 1. Función que devuelve el inverso de una cadena que se le pasa como parámetro.

function invertir(string) {
    var reverse = ""; 
    var c = string.length - 1;

    while (c >= 0) {
        reverse += string[c];
        c--;
    }
    document.write("Cadena invertida: " + reverse);
}

var phrase = prompt("Introduzca una frase: ");

invertir(phrase);