
  

    document.write(typeof 3);// arroja el tipo de valor numero

    document.write(typeof "palaba");// arroja el tipo de valor string

    

    document.write(" ---  " );

    document.write(" palaba" + 15 ); // arroja el tipo de valor numero + string coersion

    function nan() { // funcion nan not a number resultado infinito
            document.getElementById("test").innerHTML=0/0;
}

function nan2() {//funcion para saber si no es un numero dando true por que es una cadena
            document.getElementById("stri").innerHTML=isNaN('esto es un string ');
   }

   function nan3() {//funcion para saber si no es un numero dando false por que es un numero
           document.getElementById("007").innerHTML=isNaN('007');
   }

 function infi() {
    document.getElementById("infi").innerHTML=(2E310); // arroja si es infinito
}    

function not_fun() {
    document.getElementById("not").innerHTML=!(20>10); //negacion si la funcion es verdadera
}
function not_fun2() {
    document.getElementById("not2").innerHTML=!(5>10);//negacion si la funcion es falsa
}