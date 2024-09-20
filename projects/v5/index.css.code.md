```css
/* Estilo para el cuerpo de la página */
body {
  font-family: 'Muli'; /* Aplica la fuente 'Muli' a todo el contenido de la página */
}

/* Estilos para el elemento principal */
main {
  box-shadow: 1px 1px 5px #222; /* Añade una sombra alrededor del elemento principal con un desplazamiento de 1px en x e y y un desenfoque de 5px */
}

main {
  margin-top: 1rem; /* Añade un margen superior de 1rem */
  width: 50%; /* Define el ancho del main al 50% del contenedor padre */
  max-width: 100%; /* Establece un ancho máximo del 100% para evitar desbordamientos */
  margin-left: auto; /* Centra el elemento horizontalmente */
  margin-right: auto; /* Centra el elemento horizontalmente */
}

/* Estilos para los encabezados de segundo nivel */
h2 {
  text-align: center; /* Centra el texto del encabezado h2 */
}

/* CSS para el formulario de registro */
#frmRegistro {
  width: 100%; /* Ocupa el 100% del ancho disponible */
  margin-top: -1rem; /* Margen superior negativo para ajustar la posición */
  margin-left: auto; /* Centra el formulario horizontalmente */
  margin-right: auto; /* Centra el formulario horizontalmente */
  display: flex; /* Define un contenedor flexible */
  flex-direction: column; /* Alinea los elementos dentro del contenedor de manera vertical */
  background-color: beige; /* Fondo de color beige */
  padding-top: 10px; /* Añade un padding superior de 10px */
}

/* Estilos para los divs hijos del formulario de registro */
#frmRegistro > div {
  /* padding-top: 5px;  Comentado: Añadir espacio superior en cada div hijo del formulario */
  padding-bottom: 10px; /* Añade un padding inferior de 10px */
  display: flex; /* Aplica un contenedor flexible a los divs */
  column-gap: 10px; /* Espacio de 10px entre columnas de los elementos hijos */
}

/* Estilos para los labels dentro del formulario de registro */
#frmRegistro label {
  display: inline-table; /* Muestra los labels como tablas inline para un mejor control de alineación */
  width: 40%; /* Define el ancho del label como el 40% del contenedor padre */
  padding-left: 10px; /* Añade un padding izquierdo de 10px */
}

/* Estilos para los select dentro del formulario de registro */
#frmRegistro select {
  flex: 1; /* Hace que el select se expanda para llenar el espacio disponible */
  margin-right: 10px; /* Añade un margen derecho de 10px */
}

/* Estilos para los inputs de tipo texto dentro del formulario de registro */
#frmRegistro input[type="text"] {
  flex: 1; /* Hace que el input se expanda para llenar el espacio disponible */
  text-align: center; /* Centra el texto dentro del input */
  margin-right: 10px; /* Añade un margen derecho de 10px */
}

/* Estilos para los contenedores de botones */
.botones {
  text-align: center; /* Centra el texto */
  justify-content: center; /* Centra los elementos hijos dentro del contenedor */
  gap: 10px; /* Añade un espacio de 10px entre los botones */
}

/* CSS para la tabla de ventas */
#tblVentas {
  width: 100%; /* La tabla ocupa el 100% del ancho disponible */
  max-width: 100%; /* Establece un ancho máximo del 100% para evitar desbordamientos */
  margin-left: auto; /* Centra la tabla horizontalmente */
  margin-right: auto; /* Centra la tabla horizontalmente */
}

/* Estilos para los encabezados de la tabla de ventas */
#tblVentas th {
  padding: 5px; /* Añade un padding de 5px alrededor de los encabezados */
}

/* Clase para alinear el texto al centro */
.center-align {
  text-align: center; /* Centra el texto */
}

/* Clase para alinear el texto a la izquierda */
.left-align {
  text-align: left; /* Alinea el texto a la izquierda */
}

/* Clase para alinear el texto a la derecha */
.right-align {
  text-align: right; /* Alinea el texto a la derecha */
}

/* Estilos para filas de una clase row; alterna colores de fondo */
.row :nth-child(odd) {
  background-color: red; /* Aplica color de fondo rojo a las filas impares */
}

.row :nth-child(even) {
  background-color: green; /* Aplica color de fondo verde a las filas pares */
}

```