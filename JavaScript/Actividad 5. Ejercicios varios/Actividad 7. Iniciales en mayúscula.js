// 7. Si tenemos una cadena con un nombre y apellidos, realizar un programa que muestre las iniciales en mayúsculas.

var nombreApellidos, count = 1;

nombreApellidos = prompt("Introduce un nombre y apellidos:");

var mayus = nombreApellidos[0].toUpperCase()

while(count < nombreApellidos.length) {
    if(nombreApellidos[count-1] == " ") {
        mayus = mayus + nombreApellidos[count].toUpperCase();
    }
    else {
        mayus = mayus + nombreApellidos[count]
    }
    count++;
}

alert(mayus);