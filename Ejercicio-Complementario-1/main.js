/*
    IVA incluido 
    Obtener el total del iva del producto, el cual ya esta incluido.
    Aqui en Guatemala es de 12% el total del IVA
    
    Formula IVA incluido: PrecioConIVA/1.12 = precioCosto * 12% = IVA
    Ejemplo:  Precio Total Q138.26 / 1.12 = Precio Costo Q123.45 x 12% = IVA Q14.81. 

*/

function precioConIva(){
    return prompt("Ingrese el total del producto con IVA incluido");
}
function precioCosto(precioProducto){
    return precioProducto/1.12;
}
function calculoIva(totalNeto){
    const iva = 0.12;
    return totalNeto * iva;
}

function resultadoIva(resultado) {
    alert("El IVA de su producto es de: " + resultado);
}

resultadoIva(calculoIva(precioCosto(precioConIva())));