// 9. Hacer un algoritmo en js que muestre el número de días que tiene un mes. Se pedirá por teclado el número del mes.
var num, month=["31","28 o 29","31","30","31","30","31","31","30","31","30","31"];

num = parseInt(prompt("Introduzca un número del 1 al 12: "));

if (num > 0 && num < 13) {
    document.write("El mes tiene " + month[num-1] + " días.")
}
else {
    document.write("Número incorrecto.")
}