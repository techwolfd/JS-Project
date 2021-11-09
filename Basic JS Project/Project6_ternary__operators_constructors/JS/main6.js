
  
function voto_fun(){//nombre de la funcion
    var Height, Can_ride;
    Height = document.getElementById("edad").value;//obtencion del valor en html ingresado por el usuario
    Can_vote = (Height<18)?"aun eres joven para votar, no ":"tienes la edad suficiente para votar, ";//operador ternario para decidir si votar
    document.getElementById("voto").innerHTML=Can_vote+"puedes votar";//
}

function Vehiculo(Marca, Modelo, Ano, Color){//constructor
    this.Vehiculo_Marca=Marca;
    this.Vehiculo_Marca=Modelo;
    this.Vehiculo_Ano=Ano;
    this.Vehiculo_Color=Color;
}
var Jack = new Vehiculo("Dodge","Viper", 2021,"Rojo");//asignacion de valores
var Emily = new Vehiculo("Jeep", "Trail Hawk", 2019,"Black and White");
var Erick = new Vehiculo("Ford", "Pinto", 2018,"Blue");

function M_Funcion(){//funcion para saber que maneja erick
    document.getElementById("palabra_y_constructor").innerHTML="Erick maneja un-"+Erick.Vehiculo_Marca+", color -"+ Erick.Vehiculo_Color+", ano-"+Erick.Vehiculo_Ano;
}

function funcion_contar(){
    document.getElementById("contar").innerHTML=contar();

    function contar(){//funcion para contar
        var puntoinicio=1;//variable
        function masuno(){ puntoinicio -=1; }// funcion anidada
        masuno();//llamada a funcion
        return puntoinicio;//retorno de valor

    }
}