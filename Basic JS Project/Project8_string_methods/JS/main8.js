
 function fullsentence(){
  var parte1 = "tengo ";
  var parte2 = "echo en ";
  var parte3 = "dentro un completo ";
  var parte4 = "sentencia ";
  var whole = parte1.concat(parte2,parte3,parte4);
  document.getElementById("concatenar").innerHTML=whole;

 }

 function slicemetodo(){
     var sentencia = "todo al trabajo y no jugar haciendo a johnny un buen chico";
     var seccion = sentencia.slice(27,33);
     document.getElementById("slice").innerHTML=seccion;
 }