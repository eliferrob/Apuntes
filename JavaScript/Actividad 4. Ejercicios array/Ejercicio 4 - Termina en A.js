// 4. Función que devuelva verdadero o falso si una cadena (se le pasa por parámetro) termina con la letra ‘a’.

function terminaEnA (string){
    // Verificamos si el último carácter es 'a' o 'A'.
    if (string[string.length - 1].toLowerCase() === "a") {
        document.write("Verdadero");
    } else {
        document.write("Falso");
    }
}

var frase;

frase = prompt("Introduzca una frase: ");

terminaEnA(frase)