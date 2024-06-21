// * Función para cargar páginas desde el inico
function cargarPagina(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("contenido").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar la página:", error));
}

function crearEstrellas() {
	const container = document.querySelector("body");
	for (let i = 0; i < 1000; i++) {
			const estrella = document.createElement("div");
			estrella.className = "estrella";
			
			// Posición inicial aleatoria
			const x = Math.random() * 100;
			const y = Math.random() * 100;
			
			estrella.style.top = `${y}%`;
			estrella.style.left = `${x}%`;

			// Variación de la duración de la animación para cada estrella
			const duration = (Math.random() * 30) + 20; // Entre 20 y 50 segundos
			estrella.style.animationDuration = `${duration}s`;

			container.appendChild(estrella);
	}
}

crearEstrellas();

