//5. Pide una cadena y un carácter por teclado (valida que sea un carácter) y muestra cuantas veces aparece el carácter en la cadena.

var string, character, count=0

string = prompt("Introduce una cadena: ");
character = prompt("Introduce un caracter: ");

// Validar que solo se haya introducido un carácter
while (character.length !== 1) {
    alert("Por favor, introduce solo un carácter.");
    character = prompt("Introduce un carácter: ");
}

// Contar las veces que aparece el carácter
for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === character) {
        count++;
    }
}

alert("Se ha repetido ese caracter " + count + " veces.");