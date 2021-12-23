let usuario='';

class Usuario{
      constructor(nombre, apellido, correo, contrasena){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo.toLowerCase();
        this.contrasena = contrasena;
      }

      cambioContrasena(){
        this.contrasena = prompt("Ingrese su nueva Contraseña");
      }
}

function inicio(){
    alert("Bienvenido a Juegos Plus!  \nSi deseas comprar juegos debes registrarte");
    let registro = prompt("¿Deseas registrarte? si/no" ).toLowerCase();
    if(registro == "si"){
        registroUsuario();
    }else{
        alert("Recuerda que para comprar debes registrarte!");
        inicioJuego();
    }
}

function registroUsuario(){
    alert("Bienvenido, por favor ingresa la información que se solicita")
        usuario = new Usuario(
        prompt('Ingrese su nombre'),
        prompt('Ingrese su apellido'),
        prompt('Ingrese su correo'),
        prompt('Ingrese su contraseña')
    );

    alert("Usuario registrado con éxito " + "\nNombre: " + usuario.nombre + "\nApellido: " + usuario.apellido + "\nCorreo: " + usuario.correo);
    
    let cambiar = prompt("¿Desea cambiar contraseña?").toLowerCase();
    if (cambiar == "si"){
        usuario.cambioContrasena();
        alert("Se actualizo tu contraseña exitosamente! \n Te redirigiremos a buscar juegos")
        inicioJuego();
    }else{
        alert("Gracias por tu registro! \n Te redirigiremos a buscar juegos")
        inicioJuego();
    }
}


function inicioJuego(){

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