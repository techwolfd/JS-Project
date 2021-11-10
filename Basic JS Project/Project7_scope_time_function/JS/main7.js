
  
function getsaludo(){
    if(new Date().getHours()<17){
        document.getElementById("saludo").innerHTML="son las "+ Date();
    }
}

function funcionedad(){
    edad = document.getElementById("edad").value;
    if(edad >= 18){
        voto = "puedes votar";
    }
    else {
        voto = "no puedes votar";
    }
    document.getElementById("cuantostienes").innerHTML=voto;

}
var saludo = "hola";//variable global

function funciontiempo(){
    var tiempo = new Date().getHours();
    var resultado;
    var saludo2= " que tal";//variable local
    if(tiempo <12 == tiempo >0){//funcion if para calcular el primer tiempo
        respuesta="es de manana";
    }
    else if(tiempo >= 12 == tiempo <18){//funcion else if para calcular si es falso el if anterior
        respuesta="es de tarde ";
    }
    else{
        respuesta="es de noche";//else es la ultima opcion
    }
    document.getElementById("horadeldia").innerHTML=respuesta + saludo + saludo2;
}


document.write(saludo);
document.write(saludo2);

