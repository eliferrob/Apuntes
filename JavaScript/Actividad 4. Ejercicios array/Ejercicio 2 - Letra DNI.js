// 2. Dado el número de DNI mostrar la letra que le corresponde.

var numDNI, letter;

numDNI = parseInt(prompt("Introduzca su número de DNI:"));
letter = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

document.write(numDNI + letter[numDNI%23]);
