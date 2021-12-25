let productos = [];

function agregarProducto(){

    let conteoProducto = parseInt( prompt("¿Cuantos productos desea añadir? \n Ingrese un valor númerico"));

    for(let index = 1; index <= conteoProducto; index++ ){
        let ingresarProductos = prompt("Escribe el nombre del producto a ingresar: ").toLowerCase();
        productos.push(ingresarProductos); 
    }
    alert("Lo redirigimos a ordenar su array");
        ordenarArray(obtenerFormaOrden());
}

function obtenerFormaOrden(){
    return prompt("¿De que manera desea ordenar sus productos \nRespuesta valida: ascendente / descendente" ).toLowerCase(); 
}

function reordenar(){
    let reordenarProducto = prompt("¿Desea ordenar otra vez sus productos?").toLowerCase();
    
    if(reordenarProducto == "si"){
        ordenarArray(obtenerFormaOrden());
    } else {
        alert("Adios")
    }
}

function ordenarArray(tipoOrdenar){

    if (tipoOrdenar == "ascendente"){
        productos.sort((a, b) => a > b ? 1 : -1);
        alert("Sus productos ascedentemente \n" +productos);
        reordenar();

    } else if (tipoOrdenar == "descendente"){
        productos.sort((a, b) => a > b ? -1 : 1);
        alert("Sus productos descendentemente\n" + productos);
        reordenar();
    } else{
        alert('Valor no valido, intente de nuevo');
        ordenarArray(obtenerFormaOrden());
    }
}

agregarProducto();