const obtenerProducID = document.getElementById("product-container-result");
const obtenerDatos = document.getElementById("search");

const borrarContenidosHijos = (idBorrar) => {
  while (idBorrar.firstChild) {
    idBorrar.removeChild(idBorrar.lastChild);
  }
};

const noEncontrado = () => {
  if (obtenerProducID.innerHTML === "") {
    borrarContenidosHijos(obtenerProducID);
    $("#modalNoEncontrado").modal();
  }
};

$("#search-btn").click(function () {
  borrarContenidosHijos(obtenerProducID);
  const texto = obtenerDatos.value.toLowerCase();
  if (texto == "") {
    $("#modal").modal();
  }
  if ("nombre" == "nombre") {
    for (let producto of productos) {
      let nombre = producto.nombre.toLowerCase();
      if (nombre.indexOf(texto) !== -1) {
        $("#product-container-result").append(` 
                <div class="product-card">
                    <div class="product-image">
                        <span class="discount-tag">
                            50% off
                        </span>
                        <img src="${producto.foto}" class="product-thumb" alt="">
                        <button class="card-btn">
                            Más información
                        </button>
                    </div>
                    <div class="product-info">
                        <h2 class="product-brand">${producto.nombre}</h2>
                        <p class="product-short-des">${producto.descripcionCorta}</p>
                        <span class="price">$${producto.precio}</span>
                        <span class="actual-price">$240</span>
                    </div>

                </div>
                `);
      }
    }
  }
  noEncontrado();
});
