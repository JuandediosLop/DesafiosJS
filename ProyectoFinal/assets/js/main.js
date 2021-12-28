/*
    Simulador de una busqueda de juegos
    Simulador de registro de un usuario basico.
    Los juegos estan alamacenador en un array y solo esos estan disponibles.
*/

// variable que almacena al usuario que se registra
let usuario='';

//array que contiene los juegos disponibles
let juegos= [{nombre: 'HALO', genero: 'Disparos primera persona', plataforma:'Pc, Xbox, PS4', descripcion: 'Es un videojuego de disparos en primera persona desarrollado por Bungie Studios y publicado por Microsoft Game Studios el 15 de noviembre de 2001, a manera de título debut de la videoconsola Xbox'}, 
             {nombre: 'FORTNITE', genero: 'Battle Royale', plataforma:'Pc, Xbox, PS4, Nintendo Switch, PS5', descripcion:'Es un juego online de disparos (lo que se conoce como un shooter) en tercera persona (es decir; que ves a tu personaje según se mueve). Tiene dos modos de juego: Salvar al mundo y Battle Royale.'},
             {nombre: 'CALL OF DUTY', genero: 'Disparos primera persona', plataforma:'Pc, Xbox, PS3', descripcion:'Es una serie de unos videojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward, Treyarch, Sledgehammer Games y en menor proporción Raven Software y distribuida por Activision.'},
             {nombre: 'LEAGUE OF LEGENDS', genero: 'MOBA', plataforma:'Pc', descripcion:'Es un videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games para Microsoft Windows y OS X'},
             {nombre: 'COUNTER STRIKE', genero: 'Disparos primera persona', plataforma:'Pc, Xbox', descripcion:'es un videojuego de disparos en primera persona multijugador desarrollado por Valve para Microsoft Windows. Es una modificación completa del juego Half-Life, realizada por Minh Le y Jess Cliffe, quienes lanzaron la primera versión el 18 de junio de 1999.'}
            ]
/*
    Clases
*/

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

/*
    Funciones
*/

/*  función de inicio, comienzo de nuestra simulación de tienda, aqui pregunta al usuairo si desea registrar, si es positiva lo envia a la 
    función de registroUsuario, si es negativa lo envia a la función inicioJuego*/
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

//  Función para registrar un usuario, para el cambio de contraseña llamando al metodo de la clase

function registroUsuario(){
    alert("Bienvenido, por favor ingresa la información que se solicita")
        usuario = new Usuario(
        prompt('Ingrese su nombre'),
        prompt('Ingrese su apellido'),
        prompt('Ingrese su correo'),
        prompt('Ingrese su contraseña')
    );

    alert("Usuario registrado con éxito " + "\nNombre: " + usuario.nombre + "\nApellido: " + usuario.apellido + "\nCorreo: " + usuario.correo);
    
    let cambiarContra = prompt("¿Desea cambiar contraseña? si/no").toLowerCase();
    if (cambiarContra == "si"){
        usuario.cambioContrasena();
        alert("Se actualizo tu contraseña exitosamente! \n Te redirigiremos a buscar juegos")
        inicioJuego();
    }else{
        alert("Gracias por tu registro! \n Te redirigiremos a buscar juegos")
        inicioJuego();
    }
}

// función donde inicia el flujo de la busqueda del juego, pregunta al usuario si desea buscar un juego o no

function inicioJuego(){

    let buscarJuegos = prompt("¿Desea buscar un juego? si/no").toLowerCase();
    if (buscarJuegos == "si"){
        encontrado(buscarJuego());
    }else{
        salirTienda();        
    }
}

// función que obtiene y almacena el nombre del juego que el usuario desea buscar
function buscarJuego(){
    return prompt("¿Qué juego desea buscar la información?").toUpperCase();
}


/*   Función que recibe el parametro del nombre del juego que el usuario desea buscar, la funcion verifica si en nuestro array se encuentra 
    el nombre que el usuario ingresa, si se encuentra muestra la información, si no se encuentra nos muestra upn alert notificandolo */

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


/*  Función que ejecuta luego de que el usuario de por terminada una busqueda, realiza una condicion, si es positiva lo redigira a buscar un 
    nuevo juego, si es negativa llama a la función de salir tienda. */

function buscarOtroJuego(){
    let buscarOtroJuego = prompt("¿Deseas buscar otro juego? si/no").toLowerCase();
    
        if(buscarOtroJuego == "si"){
            encontrado(buscarJuego());
        }
        else{
            salirTienda();
        }
}

//  Función para dar salida a la tienda 
function salirTienda(){
    let salir = prompt("¿Desea salir de la tienda? si/no").toLowerCase();
        if(salir == "no"){
            inicio();
        }
        else{
            alert("Gracias por visitarnos");
        }
}


inicio();