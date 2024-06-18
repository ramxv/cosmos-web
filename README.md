# Cosmos Web

## Descripción
Cosmos Web es un proyecto educativo que explora las maravillas del cosmos, desde la historia del universo hasta los misterios y descubrimientos de la exploración espacial. Este sitio web está diseñado con HTML, CSS y JavaScript, y consta de cinco páginas únicas que proporcionan información detallada sobre varios aspectos del cosmos.

## Estructura del Sitio Web
El sitio web incluye las siguientes páginas:

1. **Página Principal (Home)**: Introducción general al tema del cosmos.
2. **Historia del Cosmos (History)**: Información sobre la formación y evolución del universo.
3. **Exploración Espacial (Exploration)**: Historia y hitos de la exploración espacial.
4. **El Sistema Solar (Solar System)**: Detalles sobre los planetas y otros cuerpos celestes en nuestro sistema solar.
5. **Misterios del Universo (Mysteries)**: Exploración de fenómenos y teorías intrigantes del cosmos.

## Tecnologías Utilizadas
- **HTML5**: Para estructurar el contenido del sitio web.
- **CSS3**: Para el diseño y el estilo del sitio web.
- **JavaScript**: Para agregar interactividad al sitio web.
- **Bootstrap**: Para un diseño responsivo y componentes preconstruidos.
- **jQuery**: Para facilitar la manipulación del DOM y efectos.
- **Font Awesome**: Para iconos atractivos.

## Estructura de Archivos
/cosmos-web
|-- index.html
|-- history.html
|-- exploration.html
|-- solar_system.html
|-- mysteries.html
|-- css
| |-- styles.css
|-- js
| |-- scripts.js
|-- img
| |-- (imágenes relacionadas con el cosmos)


## Nomenclatura de Branches y Commits

### Nomenclatura de Branches
Utilizamos la siguiente convención para nombrar las ramas en este proyecto:
- `main`: Rama principal que contiene la versión estable del proyecto.
- `feature/{nombre-descriptivo}`: Ramas para nuevas características o funcionalidades. Ejemplo: `feature/galeria-imagenes`.
- `bugfix/{nombre-descriptivo}`: Ramas para corrección de errores. Ejemplo: `bugfix/correccion-enlaces`.
- `hotfix/{nombre-descriptivo}`: Ramas para correcciones rápidas en la rama principal. Ejemplo: `hotfix/correccion-urgente`.

### Nomenclatura de Commits
Utilizamos mensajes de commit claros y descriptivos siguiendo la siguiente estructura:
- `feat: {descripción}`: Para la adición de nuevas características. Ejemplo: `feat: añadir sección de historia del cosmos`.
- `fix: {descripción}`: Para la corrección de errores. Ejemplo: `fix: corregir enlaces rotos en la página de exploración`.
- `docs: {descripción}`: Para cambios en la documentación. Ejemplo: `docs: actualizar el README con la estructura del proyecto`.
- `style: {descripción}`: Para cambios de formato, estilos, y correcciones menores que no afectan la funcionalidad. Ejemplo: `style: mejorar el diseño de la galería`.
- `refactor: {descripción}`: Para cambios de código que no afectan la funcionalidad. Ejemplo: `refactor: reorganizar el código CSS`.
- `test: {descripción}`: Para añadir o corregir pruebas. Ejemplo: `test: añadir pruebas para la validación de formularios`.
- `chore: {descripción}`: Para tareas varias. Ejemplo: `chore: actualizar dependencias de npm`.

### Contribuir
Para contribuir a este proyecto, sigue estos pasos:
1. Clona el repositorio.
2. Crea una nueva rama para tu característica o corrección: `git checkout -b feature/nueva-caracteristica`.
3. Realiza tus cambios y realiza commits siguiendo la nomenclatura.
4. Envía tu rama a GitHub: `git push origin feature/nueva-caracteristica`.
5. Abre una solicitud de extracción (pull request) en GitHub.
