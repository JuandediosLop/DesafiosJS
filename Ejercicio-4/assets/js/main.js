function inicio(){
    alert("Bienvenido a Juegos Plus")
    let buscar = prompt("¿Desea buscar un juego?").toLowerCase();
    if (buscar == "si"){
        encontrado(buscarJuego());
    }else{
        salirTienda();        
    }
}

function salirTienda(){
    let salir = prompt("¿Desea salir de la tienda?").toLowerCase();
        if(salir == "no"){
            inicio();
        }
        else{
            alert("Gracias por visitarnos");
        }
}

function buscarJuego(){
    return prompt("¿Qué juego desea buscar la información?");
}

function encontrado(nombreJuego){
    alert("Se encontro información del juego: " +nombreJuego );
    alert(nombreJuego + " : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque sequi, minima inventore atque placeat nam!");

    let otraCompra = prompt("¿Desea buscar otro juego?").toLowerCase();

    if(otraCompra == "si"){
        encontrado(buscarJuego());
    }
    else{
        salirTienda();
    }
}

inicio();