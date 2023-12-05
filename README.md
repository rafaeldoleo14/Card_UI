# Card_UI

<h3>Tecnologias utilizadas FRONTEND:</h3> 
Angular, CSS, Bootstrap (iconos y tabla solamente)

<h3>Informacion de lo realizado:</h3> 
Diseño manejador de tarjetas.

Incluye:
<ul>
    <li>Diseño con css</li>
    <li>Uso de subscriciones, observable y httpModule de angular</li>
    <li>Manejo de rutas</li>
    <li>Implementacio de servicio para concentrar la data en un solo lugar (singleton)</li>
    <li>Manejo de diferentes modulos</li>
    <li>Formularios reactivos con sus respectivas validaciones</li>
</ul>

<h3>Estructura carpetas:</h3> 

<ul>
    <li>shared: Contiene los componentes que se comparten en toda la aplicacion</li>
    <li>card/service: Donde almaceno la data y metodos que cualquier pueda acceder</li>
    <li>card/pages: Paginas o vistas de añadir y ver las tarjetas </li>
    <li>card/components: Distintos componentes de la aplicacion</li>
    <li>card/layouts: Cascaron del panel</li>
    <li>card/interfaces: donde se definen las interfaces que declaran como debe ser una tarjeta</li>
    <li>card/pipes: pipes personalizados :( </li>
    <li>card/Utils: Contiene Metodos reutilizables</li>
</ul>

<h3>Como Correr el proyecto:</h3> 

Pasos:
<ol>
    <li>Descargar proyecto del link del repositorio: https://github.com/rafaeldoleo14/Card_UI.git</li>
    <li>Installar modulos de node: npm install</li>
    <li>Ejecutar comando modo desarrollo: (ng serve) o (npm run start)</li>
    <li>Inmediatamente lo corra en el puerto que le indique la terminar, podra ver la vista de agregar tarjeta</li>
    <li>Luego ya puedo agregar y ver las tarjetas agregadas.</li>
</ol>

Nota:
<ol>
    <li>No necesita tener Mysql instalado, estoy usando mysql de railway, el proyecto esta conectado a esa base de datos.</li>
</ol>

<h3>Pasos realizados primer bloque FRONTEND (TODOS REALIZADOS):</h3> 

Finalizados:
<ol>
    <li>Conectar el primer bloque con el segundo bloque LISTO</li>    
    <li>Todos los campos son requeridos LISTO</li>
    <li>El editar los campos de tarjetas, fecha y nombre modifica el diseño de la tarjeta. LISTO</li>
    <li>El campo tarjeta solo puede contener números y un máximo de 16 caracteres LISTO</li>
    <li>El campo fecha de vencimiento debe tener formato mm/yy LISTO</li>
    <li>El campo fecha solo puede aceptar valores válidos para mes (01 a 12) y año (22
hasta año actual + 5) LISTO</li> 
    <li>El campo Nombre titular solo puede contener letras y letras con tildes y máximo
de 20 caracteres LISTO</li>
    <li>En caso de que algún campo no sea válido se debe colocar texto en rojo debajo
del campo indicando la causa de la invalidez LISTO</li>
    <li>Debe agregar la tarjeta a un bloque en el cual se mostrarán los campos de
tarjeta, nombre y fecha vencimiento LISTO</li>
    <li>Para cada registro se debe contener un identificador único (EN EL BACKEND) LISTO</li>
    <li>Debe validar que el formulario sea válido y que al no ser válido despliegue los
textos en cada campo que no es válido LISTO</li>
    <li>El campo de número de tarjeta se debe mostrar enmascarado, solo mostrar los
12 primeros y 4 últimos dígitos (ej. 41********1234) LISTO</li>


</ol>
