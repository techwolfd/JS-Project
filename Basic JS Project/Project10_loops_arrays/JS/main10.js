alert(document.getElementById("p1").innerHTML);







function contara10(){
    var digito ="";
    var x = 1;
    while (x<11){//funcion while
        digito+="<br>" + x;
        x++;
    }
    document.getElementById("contara10").innerHTML=digito;
}





function imgcats() {
    var cat_pic= []; //asignacion de matriz
    cat_pic[0] = "durmiendo";// asignacion de valor a cada indice de la matriz
    cat_pic[1] = "jugando";
    cat_pic[2] = "comiendo";
    document.getElementById("gato").innerHTML="el gato esta  " + cat_pic[1] + "." ;

}//



function constantef(){
    const instmusical ={type:"frand",brand:"fender",color:"black"};
    instmusical.color="blue";
    instmusical.price="$900";
    document.getElementById("constante").innerHTML="el costo de "+instmusical.type+" fue "+instmusical.price;
}

let carro ={
    make : "dodge",
    model: "viper",
    year: "2021",
    color: "red",
    description : function(){
        return "the car is a "+this.year+this.color+this.make+this.model;
        }
};
document.getElementById("objetocarro").innerHTML= carro.description();



const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let textos = "";

function listnf(){
for (let i = 0; i < cars.length; i++) {
  textos += cars[i] + "<br>";
}

document.getElementById("listn").innerHTML = textos;
}

