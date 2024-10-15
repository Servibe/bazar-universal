# Requisitos

# Funcionalidad

- Crea las 3 páginas: Inicio con caja de búsqueda, resultados de búsqueda y detalle.

- Las rutas de las páginas serán:

  - Home con caja de búsqueda
   - Ruta: /
   - Descripción: Simplemente muestra una caja de búsqueda para poder hacer la búsqueda de productos. Al realizar la búsqueda navegar a la vista de Resultados de    búsqueda.

  - Resultados de búsqueda:
   - Ruta: /items?search=, por ejemplo: /items/?search=laptop
   - Descripción: Muestra justo debajo de la caja de búsqueda, el número de resultados y también los resultados que muestra para cada categoría. En cada tarjeta de los resultados muestra: título, descripción, precio, categoría, imagen y puntuación.

  - Detalle de producto: "/items/:id"
   - Ruta: /items/:id
   - Descripción: Muestra la descripción completa del producto, incluyendo todos los detalles que tengas: precio, descripción, marca, stock, categoría, etc. Muestra todas las imágenes. También un botón para poder realizar la compra (aunque no funcione)

- API: Debes crear dos endpoints, debes basarte en el contenido del archivo products.json que tienes en este repositorio pero no tienes por qué seguir ese esquema. Los endpoints a crear son:
 - /api/items?q=:query donde :query es la búsqueda que hace el usuario. Debe devolver un JSON con los datos a mostrar en la lista de items.
 - /api/items/:id, donde :id es el id del producto seleccionado. Debe devolver un JSON con los datos del item seleccionado.

- Test: La aplicación debe tener AL MENOS un test. Haz el test que consideres más importante para tu aplicación.