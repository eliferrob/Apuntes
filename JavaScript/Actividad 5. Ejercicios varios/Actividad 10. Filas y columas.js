// 10. Dado un valor para fila y otro para columna mostrar:

var fila,col,cont=0,cont2=0

fila = parseInt(prompt("Introduce un número de filas: "));
col = parseInt(prompt("Introduce un número de columnas: "));
num = 0;

while(cont < fila){
    while(cont2 < col){
        num++;
        if(num == fila + 1) {
            num = 1;
        }
        document.write(num);
        cont2++;
    }
    document.write("<br>");
    cont2 = 0;
    cont++;
}