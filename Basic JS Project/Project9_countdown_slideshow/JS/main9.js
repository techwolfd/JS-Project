

function contar(){
    var segundos = document.getElementById("segundos").value;

    function tick (){
        segundos = segundos-1;
        timer.innerHTML=segundos;
        var tiempo = setTimeout(tick, 1000);
        if(segundos==-1){
            alert("tiempo fuera");
            clearTimeout(tiempo);
            timer.innerHTML="";
        }
    }
    tick();
}
//presentacion de diapositiva---------------






function plusSlides(n, no) {//funcion para dar la posicion
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    //funcion para determinar la posision con if
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}