const productos = [

    {
        "id": 1,
        "tipo":"Zapatos",
        "nombre":"Nike Shoe",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card1.png"
    },
    {
        "id": 2,
        "tipo":"Reloj",
        "nombre":"Smart Watch",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":100,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card2.png"
    },
    {
        "id": 3,
        "tipo":"cámaras",
        "nombre":"Camara generica",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":250,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card3.png"
    },
    {
        "id": 4,
        "tipo":"zapatos",
        "nombre":"Nike Shoe",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card4.png"
    },
    {
        "id": 5,
        "tipo":"zapatos",
        "nombre":"Nike Shoe",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card5.png"
    },
    {
        "id": 6,
        "tipo":"zapatos",
        "nombre":"Nike Shoe",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card6.png"
    },
    {
        "id": 7,
        "tipo":"zapatos",
        "nombre":"Nike Shoe",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card7.png"
    },
    {
        "id": 8,
        "tipo":"zapatos",
        "nombre":"Nike Shoe",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card8.png"
    },
    {
        "id": 9,
        "tipo":"zapatos",
        "nombre":"Nike Shoe",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card9.png"
    },
    {
        "id": 10,
        "tipo":"zapatos",
        "nombre":"Nike Shoe",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card10.png"
    },
    {
        "id": 11,
        "tipo":"zapatos",
        "nombre":"Nike Shoe",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card11.png"
    },
    {
        "id": 12,
        "tipo":"zapatos",
        "nombre":"Nike Shoe",
        "descripcionCorta": "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "descripción": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "precio":120,
        "stock":"si",
        "cantidad":15,
        "foto":"./assets/img/card12.png"
    }
];

const formulario = document.getElementById("formulario");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

const filtrar = ()=>{
    //console.log(formulario.value);
    resultado.innerHTML=''

    const texto = formulario.value.toLowerCase();

    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += ` 
                <li>${producto.nombre} - Descripción: ${producto.descripcionCorta} - Precio: $${producto.precio} </li>
            `;
        }
    }
    if(resultado.innerHTML===''){
        resultado.innerHTML += ` 
                <li>Producto no encontrado</li>
            `;
    }

} 

boton.addEventListener('click', filtrar);