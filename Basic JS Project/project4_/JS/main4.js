
    function My_Dictionary(){//se crea la funcion asignacion
        var Animal = { // de le da a la varable el nombre de animal
            Especie:"Perro",// al key se le asigna perro
            Color:"Negro",
            Raza:"Labrador",
            Edad:5,
            Sonido:"Ladrido"
            
        };
        delete Animal.Sonido;//se aplica el metodo delete
        document.getElementById("Dictionary").innerHTML=Animal.Sonido;//se invoca la funcion
    }