function inicio(){
    let comprar = prompt("¿Desea comprar un juego?").toLowerCase();
    if (comprar == "si"){
        comprado(comprarJuego());
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

function comprarJuego(){
    return prompt("¿Qué juego desea comprar?");
}

function comprado(nombreJuego){
    alert("Felicidades compro el juego: " +nombreJuego);

    let otraCompra = prompt("¿Desea comprar otro juego?").toLowerCase();

    if(otraCompra == "si"){
        comprado(comprarJuego());
    }
    else{
        salirTienda();
    }
}

inicio();