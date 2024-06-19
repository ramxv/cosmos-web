// * Función para cargar páginas desde el inico
function cargarPagina(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("contenido").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar la página:", error));
}