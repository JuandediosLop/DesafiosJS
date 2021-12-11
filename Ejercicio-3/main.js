/*
    
    Obtener los multiplos y no multiplos de un número, de un rango de números definido por el usuario.    
    En el if llevara el conteo y el número que es multiplo, se muestra en un alert
    e igualmente en el else mostrara el conteo de los no multiplos con el número.

    Ejemplo:
    si ingresa el 3 como multiplo a usar y el limite es 15, es decir evaluar 1 a 15
    Los números  3, 6, 9, 12 y 15 si es multiplo de 3 del rango de 1 a 15, ya que el residuo es de 0
    El resto son no multiplos ya que si nos devuelve un valor al residuo

    */

let multiplo =  parseInt(prompt("Ingresa el multiplo a utilizar: "));
let cantidad = parseInt(prompt("Ingrese el limite del rango de números a evaluar: "));
let siMultiplo = 0, noMultiplo = 0;

for (let i = 1; i <= cantidad; i++){
    if (i%multiplo == 0){
        siMultiplo++;
        alert( i + " si es multiplo, llevamos " + siMultiplo + " multiplos de " + multiplo );
    }else{
        noMultiplo++;
        alert( i + " no es multiplo, llevamos " + noMultiplo + " no multiplos de " + multiplo );
    }
}
alert ("Obtuvimos " + siMultiplo + " multiplos y " + noMultiplo+ " no multiplos del número " + multiplo + " del 1 al " + cantidad );