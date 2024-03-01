# REUTILIZA

## [¡App!](https://project-segunda-mano.netlify.app/)

# DESCRIPCION
Explora tesoros  en nuestra tienda online de segunda mano, donde cada artículo cuenta una historia única. Encuentra calidad y autenticidad en cada compra, dando una segunda vida a objetos con encanto.

#### [Repositorio del cliente aquí]( https://github.com/meritxellavila/segunda-mano-client-)
#### [Repositorio del servidor aquí]( https://github.com/AdriPriego/segunda-mano-server
)

# Tecnologías utilizadas

- Enumere aquí todas las tecnologías utilizadas en el proyecto como  HTML, CSS, Javascript, React, axios, Bootstrap, etc.

## Funcionalidades pendientes

**NOTA -** Iniciar sesión en la aplicación, así como la posibilidad de entablar conversaciones directas con los vendedores.

# Estructura del cliente

## Historias de usuarios

- **404** - Si el usuario ingresa una URL que no coincide con ninguna de las rutas definidas, se renderizará el componente NotFound.
- **500** - Un error 500 puede ocurrir si hay un problema en el servidor al manejar una solicitud específica. 
- **página de inicio** - Como usuario, quiero poder acceder a la página de inicio para ver de qué se trata la aplicación e iniciar sesión y registrarme.
- **subir producto** - Como usuario quiero añadir un nuevo producto para la venta.
- **editar producto** - Como usuario quiero modificar un producto que ya tengo agregado,para poder cambiar alguno de sus detalles, como el precio...
- **eliminar producto** - Como usuario, quiero eliminar un producto, ja no estoy interesado en vender.
- **lista de categorias** - Como usuario quiero poder buscar un producto segun la categoria de la que estoy interessada. 
- **crear favoritos** - Como usuario quiero crear un evento para poder invitar a otros a asistir
- **modificar favorito** - Como usuario quiero poder modificar un favorito 
- **crear reseña** - Como usuario quiero poder opinar sobre un producto, para poder dar informacion a otros usuarios.

## Client Routes

**NOTE -** Use below table to list your frontend routes

## React Router Routes (React App)



| Path                      | Page            | Components        | Behavior                                                      |
| ------------------------- | ----------------| ----------------  |  ------------------------------------------------------------  |
| `/`                       | HomePage           |                   | Home page                                                     |
| `/ProductDetall/:productId`                 | ProductDetall        |                   | favoritos, editar producto, crear reseña, editar reseña, eliminar producto, volver a página de inicio |
| `/favoritos`                  | Favoritos          |                   | añadir a favoritos, eliminar de favoritos  |
| `/AddProduct`                | AddProduct        | AddProduct       | añadir productos, añadir categorías            |
| `/EditReview/:reviewId`             | EditReview       | crear reseña, editar reseña                                   |
| `/EditProduct/:productId`             | EditProduct       |                   | editar producto, volver a página de inicio                                 |
| `/ListProducts/:category`       | ListProducts   | ProductDetall        | lista producto por categoría, detalle de producto                                |
| `/ListProducts/:search`       | ListProducts   | ProductDetall        | detalle de producto                               |



## Other Components
- Navbar

 ### Collaborators

[Developer Meri](https://github.com/meritxellavila)

[Developer Adri](https://github.com/AdriPriego)

### Project

[Repository Link Client](https://github.com/meritxellavila/segunda-mano-client-)

[Repository Link Server](https://github.com/AdriPriego/segunda-mano-server)

[Deploy Link](https://project-segunda-mano.netlify.app/)

### Excalidraw

[Link to your excalidraw](https://excalidraw.com/#json=-S99i0hkmG2R7IvDwDS1J,2pf2aQOCxvalzgbQICi5Tg)