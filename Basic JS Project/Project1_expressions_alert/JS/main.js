
var a = "este es un valor string wolf";
window.alert(a);
alert("Hello, \"ejemplo de comillas\"Wolf!");

var b = "concatenacion"+" para mostrar" +" una concatenacion con +    ";
document.write(b);

var c = "cesto", d =" es una", e =" contenacion     ";
document.write(c+d+e);

var azul = "  wolf";
var azul = azul.fontcolor("green");
document.write(azul);

var yellow = "  wolf  ";
var yellow = yellow.fontcolor("yellow");
document.write(yellow);


document.write(3+3);

function Funcion(){         //define funcion y la nombra
    var res = "texto en verde";         //define una variabley dando un valor string
    var res = res.fontcolor("green");//valor usa el vslor fontcolor en str
    document.getElementById("Green_Text").innerHTML=res;// imprime el valor de la funcion
    
}
