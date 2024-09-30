# PokeApi Test

### Instalación e inicio del proyecto

Para instalar las dependencias e iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
npm install && npm run dev
```

o solo

```bash
npm run dev
```

El proyecto requiere node 20 o superior.

### Librerías utilizadas

- Vue 3
- Vue Router
- Axios

### Estructura del proyecto

- **/router:** Contiene las rutas del proyecto.

- **/components:**
  - **Navbar:** Navegación para cambiar entre las vistas.
  - **PokemonModal:** Modal que muestra información del Pokémon seleccionado.
  - **SearchBar:** Barra de búsqueda para ambas listas (pokémones y favoritos).
  - **Loader:** Componente reutilizable para mostrar un estado de "cargando".

- **/views:**
  - **Index:** Pantalla inicial de bienvenida.
  - **List:** Lista de pokémones obtenidos de la API.
  - **Favorites:** Lista de pokémones guardados en favoritos.
  - **NotFound:** Página 404 para rutas no encontradas.

### Descripción

Decidí utilizar Vue 3 ya que es una versión que aún no había explorado, mientras que mis últimos proyectos fueron en Vue 2. Noté que los cambios estructurales de Vue 3 son significativos, adoptando enfoques más modernos para el desarrollo.

En este proyecto utilicé `localStorage` como método para persistir la información, ya que aún no domino el store nativo de Vue, aunque es algo que me gustaría aprender en futuras prácticas. Por otro lado, creé componentes reutilizables para evitar duplicación de código en la aplicación. Además, opté por organizar el contenido en diferentes vistas, brindando mayor comodidad al usuario, permitiéndole ver solo los favoritos o la lista completa según lo desee.

### Mejoras a realizar

1. Crear un componente para la lista de pokémones.
2. Crear un componente de botón.
3. Eliminar el uso de `localStorage` para mejorar la persistencia de datos.
4. Pensar en una estructura de estilos más escalable para la aplicación.
5. Crear un backend con filtros para optimizar el uso de las APIs, evitando traer datos innecesarios que no se utilizarán en los detalles de los pokémones.
