alert(document.getElementById("p1").innerHTML);


a="siempcc----cre ";
b="recordar ";
document.write(a+b);

x="tu ";
y="eres ";
document.write(x+y);





var d=82;
document.write("<br>"+d +"here");
{
    let d =33 ;
    document.write("<br>"+d);
}
document.write("<br>"+d);
{
    var d =33 ;
    document.write("<br>"+d);
}
document.write("<br>"+d);

m="unico ";
n="como ninguno ";
document.write(m+n);
function contara10(){
    var digito ="";
    var x = 1;
    while (x<11){
        digito+="<br>" + x;
        x++;
    }
    document.getElementById("contara10").innerHTML=digito;
}


var numeros=["uno","dos","tres","cuatro","cinco","seis"];
var content="";
var y;
function listnumber(){
    for (y=0;y<numeros.length;y++){
        content += numeros[y]+"<br>";
    }
    document.getElementById("listnumber").innerHTML=content;
}


function imgcats() {
    var cat_pic= [];
    cat_pic[0] = "durmiendo";
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




