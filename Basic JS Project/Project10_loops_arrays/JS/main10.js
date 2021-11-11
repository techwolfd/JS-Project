alert(document.getElementById("p1").innerHTML);


a="siempre ";
b="recordar ";
document.write(a+b);

x="tu ";
y="eres ";
document.write(x+y);

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

function imgcats(){
    var cat_pic=[];
    cat_pic=[0] = "durmiendo";
    cat_pic=[1] = "jugar";
    cat_pic=[2] = "comer";
    document.getElementById("gato").innerHTML=cat_pic[1] ;

}