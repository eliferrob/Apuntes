// 8. Hacer un algoritmo en js que muestre el mes que se corresponde a un número dado por teclado.
var num, month=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

num = parseInt(prompt("Introduzca un número del 1 al 12:"));

if (num > 0 && num < 13) {
    document.write(month[num-1])
}
else {
    document.write("Número incorrecto.")
}