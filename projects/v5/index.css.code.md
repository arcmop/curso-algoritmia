```css
/* Establece la fuente por defecto para todo el cuerpo del documento */
body {
  font-family: 'Muli';
}

/* Aplica una sombra a los elementos main para dar un efecto de elevación */
main {
  box-shadow: 1px 1px 5px #222; /* Sombra suave con un color oscuro */
}

/* Establece el ancho y el margen del main para centrarlo y limitar su tamaño */
main {
  margin-top: 1rem; /* Espacio superior */
  width: 50%; /* Ancho del 50% del contenedor padre */
  max-width: 100%; /* Ancho máximo no excede el 100% */
  margin-left: auto; /* Centrado horizontal */
  margin-right: auto; /* Centrado horizontal */
}

/* Centra el texto de todos los h2 */
h2 {
  text-align: center;
}

/* CSS para el formulario */
#frmRegistro {
  width: 100%; /* Ocupa todo el ancho del contenedor */
  margin-top: -1rem; /* Margen superior negativo para reducir espacio */
  margin-left: auto; /* Centrado horizontal */
  margin-right: auto; /* Centrado horizontal */
  display: flex; /* Usa flexbox para la disposición de los hijos */
  flex-direction: column; /* Dispone los elementos hijos en columna */
  background-color: beige; /* Color de fondo beige */
  padding-top: 10px; /* Espacio superior interno */
}

#frmRegistro > div {
  /* padding-top: 5px;  Margen superior comentado, posiblemente para ajustar espacio */
  padding-bottom: 10px; /* Espacio inferior interno */
  display: flex; /* Uso de flexbox para disposición de los elementos hijos */
}

/* Estilo para las etiquetas del formulario */
#frmRegistro label {
  display: inline-table; /* Hace que la etiqueta se comporte como una tabla */
  width: 40%; /* Ancho del 40% del contenedor padre */
  padding-left: 10px; /* Espacio a la izquierda */
}

/* Estilo para los elementos select dentro del formulario */
#frmRegistro select {
  flex: 1; /* Ocupa todo el espacio disponible en su contenedor flex */
  margin-right: 10px; /* Espacio a la derecha */
}

/* Estilo para los inputs de tipo texto dentro del formulario */
#frmRegistro input[type="text"] {
  flex: 1; /* Ocupa todo el espacio disponible en su contenedor flex */
  text-align: center; /* Alinea el texto al centro */
  margin-right: 10px; /* Espacio a la derecha */
} 

/* Estilo para los inputs de tipo radio dentro del formulario */
#frmRegistro input[type="radio"] {
  margin-right: 10px; /* Espacio a la derecha */
} 

/* Estilo específico para el tercer input de tipo radio */
#frmRegistro input[type="radio"]:nth-child(3) {
  margin-left: 10px; /* Espacio a la izquierda */
}

/* Estilos para la sección de botones */
.botones {
  text-align: center; /* Centra el texto */
  justify-content: center; /* Centra el contenido dentro de un contenedor flex (si aplica) */
}

/* Estilo para el botón de tipo reset dentro de botones */
.botones > button[type="reset"] {
  margin-right: 5px; /* Espacio a la derecha */
}

/* Estilo para el botón de tipo button dentro de botones */
.botones > button[type="button"] {
  margin-left: 5px; /* Espacio a la izquierda */
}

/* CSS para la tabla */
#tblVentas {
  width: 100%; /* Ocupa todo el ancho disponible */
  max-width: 100%; /* No excede el 100% de ancho */
  margin-left: auto; /* Centrado horizontal */
  margin-right: auto; /* Centrado horizontal */
}

/* Estilo para las celdas de encabezado de la tabla */
#tblVentas th {
  padding: 5px; /* Espacio interno alrededor del texto */
}

/* Clases de alineación de texto */
.center-align {
  text-align: center; /* Alinea el texto al centro */
}

.left-align {
  text-align: left; /* Alinea el texto a la izquierda */
}

.right-align {
  text-align: right; /* Alinea el texto a la derecha */
}

/* Estilos alternos para filas de una tabla o contenedor */
.row :nth-child(odd) {
  background-color: red; /* Color de fondo rojo para elementos impares */
}

.row :nth-child(even) {
  background-color: green; /* Color de fondo verde para elementos pares */
}

```