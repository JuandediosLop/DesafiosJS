let productos = [];
class Producto{
    constructor(nombre, cantidad, categoria){
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.categoria = categoria;
    }
}

function agregarProducto(){

    let conteoProducto = parseInt( prompt("¿Cuantos productos desea añadir? \n Ingrese un valor númerico"));

    for(let index = 1; index <= conteoProducto; index++ ){
        alert("Bienvenido, por favor ingresa la información que se solicita del producto \nProducto:" +index +  " de " + conteoProducto)
        productos.push( new Producto(
        prompt('Ingrese el nombre').toLowerCase(),
        parseInt(prompt('Ingrese la cantidad de producto \n Ingrese un valor númerico')),
        prompt('Ingrese la categoria').toLowerCase()
        ));
        
    }
        ordenarArray(obtenerFormaOrden(), modoDeOrden());
}

function obtenerFormaOrden(){
    return prompt("¿De que manera desea ordenar sus productos \nRespuesta valida: ascendente / descendente" ).toLowerCase(); 
}

function reordenar(){
    let reordenarProducto = prompt("¿Desea ordenar otra vez sus productos?").toLowerCase();
    
    if(reordenarProducto == "si"){
        
        ordenarArray(obtenerFormaOrden(), modoDeOrden());
    } else {
        alert("Adios");
    }
}

function modoDeOrden(){
    return prompt("Ingrese el indice que desea ordenar sus productos: \n Opciones: nombre, cantidad, categoria").toLowerCase();
}

function ordenarArray(tipoOrdenar, modoOrden){
    if (tipoOrdenar == "ascendente"){

        if(modoOrden == "nombre"){
            productos.sort((a, b) => a.nombre> b.nombre ? 1 : -1);
            alert("Sus productos en orden " + tipoOrdenar +" y por " + modoOrden + "\n"  + JSON.stringify(productos));
            reordenar(); 
        } else if (modoOrden =="cantidad"){
            productos.sort((a, b) => a.cantidad> b.cantidad ? 1 : -1);
            alert("Sus productos en orden " + tipoOrdenar +" y por " + modoOrden + "\n"  + JSON.stringify(productos));
            reordenar(); 
        } else if(modoOrden ==="categoria"){
            productos.sort((a, b) => a.categoria> b.categoria ? 1 : -1);
            alert("Sus productos en orden " + tipoOrdenar +" y por " + modoOrden + "\n"  + JSON.stringify(productos));
            reordenar();
        }else{
            alert('Valor no valido, intente de nuevo');
            ordenarArray(obtenerFormaOrden(), modoDeOrden());
        }
        
    } else if (tipoOrdenar == "descendente"){

        if(modoOrden =="nombre"){
            productos.sort((a, b) => a.nombre > b.nombre ? -1 : 1);
            alert("Sus productos en orden " + tipoOrdenar +" y por " + modoOrden + "\n"  + JSON.stringify(productos));
            reordenar();

        }else if(modoOrden == "cantidad"){
            productos.sort((a, b) => a.cantidad > b.cantidad ? -1 : 1);
            alert("Sus productos en orden " + tipoOrdenar +" y por " + modoOrden + "\n"  + JSON.stringify(productos));
            reordenar();

        }else if(modoOrden == "categoria"){
            productos.sort((a, b) => a.categoria > b.categoria ? -1 : 1);
            alert("Sus productos en orden " + tipoOrdenar +" y por " + modoOrden + "\n"  + JSON.stringify(productos));
            reordenar();
        }else{
            alert('Valor no valido, intente de nuevo');
            ordenarArray(obtenerFormaOrden(), modoDeOrden());
        }
    } else{
        alert('Valor no valido, intente de nuevo');
        ordenarArray(obtenerFormaOrden(), modoDeOrden());
    }
}

function printObject() {
    
  }

agregarProducto();  