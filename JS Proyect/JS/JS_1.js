function funcion_color(){
    var color_ouput;
    var colors = document.getElementById("color_input").value;
    var color_string = "es un gran color";

    switch(colors){
        case "rojo":
            color_ouput ="rojo" + color_string;
        break;
        case "azul":
            color_ouput ="azul" + color_string;
        break;
        case "amarillo":
            color_ouput ="amarillo" + color_string;
        break;
        case "verde":
            color_ouput ="verde" + color_string;
        break;
        case "morado":
            color_ouput ="morado" + color_string;
        break;
        case "gris":
            color_ouput ="gris" + color_string;
        break;
        case "rosa":
            color_ouput ="rosa" + color_string;
        break;
    }
    document.getElementById("salida").innerHTML=color_ouput;
}

function hi(){
    var a = document.getElementsByClassName("click");
    a[1].innerHTML="no es cierto si cambio";
}

