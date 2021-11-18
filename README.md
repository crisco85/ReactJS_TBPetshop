# TB-Petshop Ecommerce

TB-Petshop es una aplicación Ecommerce totalmente integrada para gestión de venta de productos relacionados
con mascotas

## Inicio

Este proyecto esta casi totalmente realizado con React, por lo cual es viable hacer modificaciones a través del comando npm install

### Web publicada

Podemos ver el proyecto publicado en el siguiente enlace(https://tb-petshop.netlify.app/) y se agrego una carpeta "Video" en el repo para poder ver el funcionamiento en tiempo real a traves de un gif.

### Librerias y tecnologias utilizadas

BOOTSTRAP:
React-Bootstrap es una excelente opción para utilizar como base para generar la interfaz de usuario, podemos encontrar compatibilidad y temas únicos que como indicamos previamente son facules de utilizar (https://react-bootstrap.github.io/)

- Instalación: npm install react-bootstrap@next bootstrap@5.1.1

SASS:
Es un lenguaje fácil de usar que nos ayuda a reducir muchos de los desafíos de repetición y mantenibilidad del CSS tradicional, es muy practico e intuitivo una vez que se le da uso (https://sass-lang.com/)

- Instalación: npm install node-sass

REACT-ROUTER-DOM:

- Instalación: npm install react-router.dom

SWEETALERT:
Las alertas que va generando el sistema se realizan a traves de SweetAlert ya que tiene alertas muy simples y fáciles de preconfigurar (https://sweetalert2.github.io)

- Instalación: npm install sweetalert2

FIREBASE:
Base de datos en la nube que nos ayuda con el repositorio de productores y ordenes que vamos generando
(https://firebase.google.com/)

### Login

El Login generado es un MOC sencillo que solo funciona presiona el botón de Login, en es instante se genera un nuevo botón "Salir" en la parte superior derecha de la pantalla para simular el logueo de un usuario en sistema

### Sobre la Aplicación

La aplicación se inicia con el login previamente comentado, luego se divide en;
Inicio: Vista principal que agrupa todos los productos del Ecommerce
Categorias: Hay una vista por categorias, generamos 3 principales (Alimento, Higiene y Juguetes) pero altamente escalable
Detalle del producto: Tenemos también una vista por producto con los detalles individuales del mismo
Carrito: Hay un carrito de compras generado que lista los articulos que vamos agregando para posteriormente simular la compra de un usuario
Navbar: Tenemos un Navbar generado que nos facilita la navegación entre las vistas previamente indicadas

### Autor

Cristian Alberto Correa - Estudiante entusiasta
