const productos = [
    {nombre:'Platanos', valor:200, disponible:'si'},
    {nombre:'Pera', valor:120, disponible:'si'},
    {nombre:'Sandia', valor:100, disponible:'si'},
    {nombre:'Melon', valor:200, disponible:'si'},
    {nombre:'Frutillas', valor:150, disponible:'no'},
    {nombre:'bananos', valor:150, disponible:'no'},
];

const formulario = document.getElementById("formulario");
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");



const filtrarNombre = ()=>{
    resultado.innerHTML='';
    escribirResultado("nombre");
    noEcontrado();
} 

const escribirResultado= (parametro)=>{
    const texto = formulario.value.toLowerCase();

    if(texto==''){
        resultado.innerHTML +=`
        <p>Campo Vacio</p>
        `
        return;
    }
    
    if(parametro == "nombre"){
        for(let producto of productos){
            let nombre = producto.nombre.toLowerCase();
            if(nombre.indexOf(texto) !== -1){
                resultado.innerHTML += ` 
                    <div class="producto">
                        <h2>${producto.nombre}</h2>
                        <p>Disponible: <span>${producto.disponible}</span></p>
                        <p>Precio: <span> $${producto.valor}</span></p>
                    </div>
                `;
            }
        }
    }

}

const noEcontrado=()=>{
    if(resultado.innerHTML===''){
        resultado.innerHTML += ` 
                <li>Producto no encontrado</li>
            `;
    }
}

boton.addEventListener('click', filtrarNombre);