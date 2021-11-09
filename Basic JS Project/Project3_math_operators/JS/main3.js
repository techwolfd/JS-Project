
    function Add(){
        var addition = 2+2;//asigna al valor la operacion suma
        document.getElementById("Matha").innerHTML="2+2="+addition;
    }
    
    function Sub_F(){
        var Sub = 5-2;//asigna al valor la operacion resta
        document.getElementById("Maths").innerHTML="5-2="+Sub;
    }

    function Mult(){
        var SM = 5*2;//asigna al valor la operacion multiplicacion
        document.getElementById("Mathm").innerHTML="5*2="+SM;
    }

    function Div(){
        var SM = 4/2;//asigna al valor la operacion divicion
        document.getElementById("Mathd").innerHTML="4/2="+SM;
    }

    function MoreMath(){
        var SM = (1+2)*10/2-5;//asigna al valor la operacion de varias operaciones
        document.getElementById("Mathmm").innerHTML="1 mas 2, multiplicado por 10 dividido en la mitad y entonces restado en 5 es igual a "+SM;
    }

    function modulo(){
        var SM = 25%6;//asigna al valor la operacion modulo
        document.getElementById("Mathmodulo").innerHTML="cuando divide 25 por 6 tienes un residuo de:"+ SM;
    }

    function negacion(){
        var SM = 10;//asigna al valor 10 
        document.getElementById("Mathnegacion").innerHTML=-SM;

    }

var x = 5;// se asigna un valor a la variable
x++;//se suma uno
document.write(x);//se imprime el valor

var y = 5.25;// se asigna un valor a la variable
y--;//se resta uno
document.write(y);//se imprime el valor

window.alert(Math.random()); //manda una alerta con un valor random entre 0 y 1

window.alert(Math.random()* 100); //manda una alerta con un valor random entre 0 y 100


