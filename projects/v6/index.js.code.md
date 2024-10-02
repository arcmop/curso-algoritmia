
## Archivo data.js

```js
const productos = [
    {
        id: 1,
        nombre: "Laptop ASUS ROG",
        precio: 1500.00
    }, {
        id: 2,
        nombre: "Laptop Lenovo Z14",
        precio: 2500.50
    }, {
        id: 3,
        nombre: "Laptop HP 8050 v3",
        precio: 950.50
    }
];
```

## Archivo main.js

```js
window.onload = inicializaSistema;

function cargaProductos() {
  // Seleccionar el elemento <select> del DOM
  const productoSelect = document.getElementById("cboProductos");

  productos.forEach(producto => {
    const option = document.createElement("option");
    option.value = producto.id; // Valor del <option>
    option.textContent = producto.nombre; // Texto que se mostrará
    productoSelect.appendChild(option); // Agregar la opción al <select>
  });
}

function creaEventos() {
  document.getElementById('btnRegistrar').addEventListener('click', function () {
    // Obtener la tabla y su cuerpo
    const tabla = document.getElementById('tblVentas').getElementsByTagName('tbody')[0];

    // Obtener el número de filas actuales para definir el número correlativo
    const numeroCorrelativo = tabla.rows.length + 1;

    // Obtener el valor seleccionado del elemento select
    const selectProducto = document.querySelector('select[name="cboProductos"]');
    const productoSeleccionado = selectProducto.options[selectProducto.selectedIndex].text;

    // Obtener el valor del campo de texto de cantidad
    const txtCantidad = document.getElementById('txtCantidad').value;
    const cantidad = parseFloat(txtCantidad);

    // Obtener el color seleccionado
    let color;
    const colorSeleccionadoUI = document.querySelector('input[name="radioColor"]:checked');
    if (colorSeleccionadoUI) {
      color = colorSeleccionadoUI.value;
      console.log('Color seleccionado:', colorSeleccionadoUI.value);
    } else {
      console.log('No se seleccionó color');
    }

    // Verificar si la boleta electrónica está seleccionada
    const boletaElectronicaUI = document.querySelector('input[name="checkBoleta"]').checked;
    const boletaElectronica = boletaElectronicaUI ? 'Sí' : 'No'

    // Crear una nueva fila
    const nuevaFila = tabla.insertRow();

    // Insertar celdas en la fila
    const celdaNumero = nuevaFila.insertCell(0);
    const celdaFecha = nuevaFila.insertCell(1);
    const celdaProducto = nuevaFila.insertCell(2);
    const celdaColor = nuevaFila.insertCell(3);
    const celdaBoletaElectronica = nuevaFila.insertCell(4);
    const celdaCantidad = nuevaFila.insertCell(5);
    const celdaSubtotal = nuevaFila.insertCell(6);
    const celdaIgv = nuevaFila.insertCell(7);
    const celdaTotal = nuevaFila.insertCell(8);

    // Calcular subtotal, IGV y total
    let subtotal = cantidad * productos[selectProducto.selectedIndex].precio;
    let igv = subtotal * 0.18; // El IGV se calcula sobre el subtotal
    let total = subtotal + igv;

    // Asignar valores a las celdas
    celdaNumero.textContent = numeroCorrelativo;
    celdaFecha.textContent = formatearFecha(new Date());
    celdaProducto.textContent = productoSeleccionado;
    celdaColor.textContent = color;
    celdaBoletaElectronica.textContent = boletaElectronica;
    celdaCantidad.textContent = cantidad;
    celdaSubtotal.textContent = subtotal.toFixed(2);
    celdaIgv.textContent = igv.toFixed(2);
    celdaTotal.textContent = total.toFixed(2);

    // Asignar clases a las celdas
    celdaNumero.classList.add('center-align');
    celdaFecha.classList.add("center-align");
    celdaProducto.classList.add('left-align');
    celdaColor.classList.add('center-align');
    celdaBoletaElectronica.classList.add('center-align');
    celdaCantidad.classList.add('center-align');
    celdaSubtotal.classList.add('right-align');
    celdaIgv.classList.add('right-align');
    celdaTotal.classList.add('right-align');

    // Actualizar el total acumulado
    actualizarTotalAcumulado();
  });
}

function formatearFecha(fecha) {
  const año = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const dia = String(fecha.getDate()).padStart(2, '0');
  let horas = fecha.getHours();
  const minutos = String(fecha.getMinutes()).padStart(2, '0');
  const segundos = String(fecha.getSeconds()).padStart(2, '0');
  const ampm = horas >= 12 ? 'PM' : 'AM';

  horas = horas % 12; // Convierte la hora al formato de 12 horas
  horas = horas ? horas : 12; // La hora '0' se convierte a '12'
  horas = String(horas).padStart(2, '0');

  return año + '-' + mes + '-' + dia + ' ' + horas + ':' + minutos + ':' + segundos + ' ' + ampm;
}

// Función para actualizar el total acumulado en el tfoot
function actualizarTotalAcumulado() {
  const tabla = document.getElementById('tblVentas');
  const filas = tabla.getElementsByTagName('tbody')[0].rows;
  let totalAcumulado = 0;

  // Sumar los valores de la columna "Total" de todas las filas
  for (let i = 0; i < filas.length; i++) {
    totalAcumulado += parseFloat(filas[i].cells[8].textContent);
  }

  // Actualizar el valor del tfoot
  document.getElementById('totalAcumulado').textContent = totalAcumulado.toFixed(2);
}

function inicializaSistema() {
  cargaProductos();
  creaEventos();
}
```