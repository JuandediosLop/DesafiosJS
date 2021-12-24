let usuario='';
let juegos= [{nombre: 'HALO', genero: 'Disparos primera persona', plataforma:'Pc, Xbox, PS4', descripcion: 'Es un videojuego de disparos en primera persona desarrollado por Bungie Studios y publicado por Microsoft Game Studios el 15 de noviembre de 2001, a manera de título debut de la videoconsola Xbox'}, 
             {nombre: 'FORTNITE', genero: 'Battle Royale', plataforma:'Pc, Xbox, PS4, Nintendo Switch, PS5', descripcion:'Es un juego online de disparos (lo que se conoce como un shooter) en tercera persona (es decir; que ves a tu personaje según se mueve). Tiene dos modos de juego: Salvar al mundo y Battle Royale.'},
             {nombre: 'CALL OF DUTY', genero: 'Disparos primera persona', plataforma:'Pc, Xbox, PS3', descripcion:'Es una serie de unos videojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward, Treyarch, Sledgehammer Games y en menor proporción Raven Software y distribuida por Activision.'},
             {nombre: 'LEAGUE OF LEGENDS', genero: 'MOBA', plataforma:'Pc', descripcion:'Es un videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games para Microsoft Windows y OS X'},
             {nombre: 'COUNTER STRIKE', genero: 'Disparos primera persona', plataforma:'Pc, Xbox', descripcion:'es un videojuego de disparos en primera persona multijugador desarrollado por Valve para Microsoft Windows. Es una modificación completa del juego Half-Life, realizada por Minh Le y Jess Cliffe, quienes lanzaron la primera versión el 18 de junio de 1999.'}
            ]

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
    return prompt("¿Qué juego desea buscar la información?").toUpperCase();
}

function buscarOtroJuego(){
    let otroJuego = prompt("¿Deseas buscar otro juego?").toLowerCase();
    
        if(otroJuego == "si"){
            encontrado(buscarJuego());
        }
        else{
            salirTienda();
        }
}

function encontrado(nombreJuego){
    let juegoObtenido = juegos.find( juego =>juego.nombre === nombreJuego);

    if(juegoObtenido== undefined){
        alert('El juego buscado NO existe');
        buscarOtroJuego();
    }else{

        alert("Se encontro información del juego: " + juegoObtenido.nombre );
        alert(juegoObtenido.nombre + ": \nDescripción: "+ juegoObtenido.descripcion + "\nCategoria: " +juegoObtenido.genero + "\nPlataforma: " + juegoObtenido.plataforma);
        buscarOtroJuego();
    }

}

inicio();