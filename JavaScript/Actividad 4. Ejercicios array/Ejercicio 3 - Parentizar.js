// 3. Función que devuelva verdadero o falso si una cadena está bien parentizada

function parentizar(string){
    var cOpen,cClose,string,c;
    c = 0;
    cOpen = 0;
    cClose = 0;
    parentesis = ["(",")"]

    while (c<=string.length+1){
         if(cOpen>=cClose){
            if(string[c] == parentesis[0]){
                cOpen++;
            }
            if(string[c] == parentesis[1]){
                cClose++;
            }
        }
        else{
            alert("Los paréntesis están mal colocados.");
            break;
        }
        c++;
    }
    if(cOpen==cClose){
        alert("Los paréntesis están bien colocados.");
    }
}

var phrase;
phrase = prompt("Introduzca una frase: ");

parentizar(phrase);