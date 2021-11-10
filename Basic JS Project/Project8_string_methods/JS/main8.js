
 function fullsentence(){
  var parte1 = "tengo ";//string1
  var parte2 = "echo en ";//string2
  var parte3 = "este ejemplo una ";//string3
  var parte4 = "concatenacion ";//string4
  var whole = parte1.concat(parte2,parte3,parte4);//concatenacion
  document.getElementById("concatenar").innerHTML=whole;

 }

 function slicemetodo(){
     var sentencia = "todo al trabajo y no jugar haciendo a johnny un buen chico";//string
     var seccion = sentencia.slice(27,33);//rango de posiciones
     document.getElementById("slice").innerHTML=seccion;
 }

 function mfupper() {
    let text = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML =    text.toUpperCase();//funcion para uppercase
  }

  function metstr(){
      var x = 182;
      document.getElementById("nstr").innerHTML=x.toString();//funcion tostring
  }

  function metpresicion(){
      var x= 12345.67891123;
      document.getElementById("presicion").innerHTML=x.toPrecision(9);//funcion presicion a un numero
  }