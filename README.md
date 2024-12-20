Para poder acceder al código es necesario tener instalado Java 21 y nodejs 22.11.0 al menos para evitar problemas de compatibilidad.
Instalar 
-NodeJs
-MySql workbench
-InteliJIdea 
-Visual Studio Code
-Postman (opcional)

Desde git puedes seleccionar la opción "descargar ZIP" o con gitbash puedes copiar la dirección del repositorio y ejecutar el comando git clone [dirección del repositorio que se agrega con shift+insert]

Una vez tengas descargado el proyecto 

Abre el archivo Queries.sql con mysql workbecnh y ejecuta las instrucciones para crear la base de datos "coppel" y la tabla "artículos" que será usada más adelante. 

Una vez creada la tabla abre la carpeta Articulos Coppel que contiene los poryectos de back end y front end.

Para el backend abre la carpeta "articulos" con algún editor de código. En mi caso fue IntelliJ Idea Community Edition 2023.2.2

Se tienen que instalar las dependencias del proyecto con Maven. 

Se modifica el puerto por defecto en el archivo application.properties. Lo dejé en 8080. 

Se modifican las credenciales de acceso a la base de datos en el archivo Conexion.java, en mi caso para esta prueba use username = "root" y password = "pass123".

Puedes descomentar el código que sirve para probar la conexión a la base de datos para probar si funciona la configuración si lo crees conveniente.

Una vez completada la configuración puedes correr el proyecto en ArticulosApplication.java.

Front End
Para el front end puedes abrir el proyecto con Visual Studio Code. Abre una nueva terminal en view/terminal

En la terminal instalas las dependencias con el comando: npm install 

Y cuando esté listo correr el código con el comando: npm run dev 

Mira qué puerto se usa para desplegar el front end y si no es el puerto 5173 modifica este puerto en el backend en el archivo ArticuloController.java del backend en IntelliJ, vuelve a correr el backend y listo).

Una vez esté lista esta configuración se podrá hacer uso de las funciones del sistema. 


