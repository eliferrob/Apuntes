/*9.- Realice un programa que pregunte aleatoriamente una multiplicación. El programa debe indicar
si la respuesta ha sido correcta o no (en caso que la respuesta sea incorrecta el programa debe
indicar cuál es la correcta). El programa preguntará 10 multiplicaciones, y al finalizar mostrará el
número de aciertos.
*/

var result, num1, num2, correctAnswers=0, attempts=0;

while(attempts < 10){
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    result = parseInt(prompt(num1 + " * " + num2 + " = "));

    if(result == num1 * num2){
        alert("Correcto.")
        correctAnswers++;
    }
    else {
        alert("Incorrecto. El resultado era " + num1 * num2)
    }
    attempts++;
}

alert("Has acertado " + correctAnswers + " de 10")