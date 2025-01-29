// 1. Programa que convierte una cantidad de segundos en formato hh:mm:ss

var hour = 0;
var min = 0;
var sec = 0;
var c = 0;
var time;

time = parseInt(prompt("Introduce la cantidad de segundos: "), 10);

while (c < time) {
    sec++;
    if (sec >= 60) {
        min++;
        sec = 0;
        if (min >= 60) {
            hour++;
            min = 0;
        }
    }
    c++;
}

// Formatear con dos dígitos
hour = String(hour).padStart(2, '0');
min = String(min).padStart(2, '0');
sec = String(sec).padStart(2, '0');

// Mostrar resultado
document.write("Tiempo formateado -> " + hour + ":" + min + ":" + sec);
