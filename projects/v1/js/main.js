// Inicializar la base de datos IndexedDB
function inicializaSistema() {
  const request = indexedDB.open('ventasDB', 1);

  // Manejo de errores
  request.onerror = function(event) {
      console.error('Error al abrir la base de datos:', event.target.error);
  };

  // Creación de la base de datos y su almacén de objetos
  request.onupgradeneeded = function(event) {
      const db = event.target.result;
      const objectStore = db.createObjectStore('ventas', { keyPath: 'id', autoIncrement: true });
      objectStore.createIndex('producto', 'producto', { unique: false });
      objectStore.createIndex('cantidad', 'cantidad', { unique: false });
      objectStore.createIndex('subtotal', 'subtotal', { unique: false });
      objectStore.createIndex('igv', 'igv', { unique: false });
      objectStore.createIndex('total', 'total', { unique: false });
  };

  // Operaciones cuando la base de datos se abre correctamente
  request.onsuccess = function(event) {
      const db = event.target.result;
      cargaProductos();
      creaEventos(db);
      cargarDatos(db);
  };
}

// Función para cargar los productos en el <select>
function cargaProductos(){
  const productoSelect = document.getElementById("cboProductos");

  productos.forEach(producto => {
      const option = document.createElement("option");
      option.value = producto.id;
      option.textContent = producto.nombre;
      productoSelect.appendChild(option);
  });
}

// Función para crear eventos, incluyendo la lógica de registrar ventas en IndexedDB
function creaEventos(db){
  document.getElementById('btnRegistrar').addEventListener('click', function () {
      // Obtener el valor seleccionado del elemento select
      const selectProducto = document.querySelector('select[name="cboProductos"]');
      const productoSeleccionado = selectProducto.options[selectProducto.selectedIndex].text;

      // Obtener el precio del producto seleccionado
      const precioProducto = productos.find(producto => producto.nombre === productoSeleccionado).precio;

      // Obtener el valor del campo de texto de cantidad
      const txtCantidad = document.getElementById('txtCantidad').value;
      const cantidad = parseFloat(txtCantidad);

      // Calcular subtotal, IGV y total
      let subtotal = cantidad * precioProducto;
      let igv = subtotal * 0.18; // El IGV se calcula sobre el subtotal
      let total = subtotal + igv;

      // Insertar la venta en IndexedDB
      insertarVenta(db, { producto: productoSeleccionado, cantidad: cantidad, subtotal: subtotal, igv: igv, total: total });
  });
}

// Función para insertar una nueva venta en IndexedDB
function insertarVenta(db, venta) {
  const transaction = db.transaction(['ventas'], 'readwrite');
  const objectStore = transaction.objectStore('ventas');
  const request = objectStore.add(venta);

  request.onsuccess = function() {
      console.log('Venta registrada con éxito.');
      cargarDatos(db); // Recargar los datos en la tabla HTML
  };

  request.onerror = function(event) {
      console.error('Error al registrar la venta:', event.target.error);
  };
}

// Función para cargar los datos de IndexedDB y mostrarlos en la tabla HTML
function cargarDatos(db) {
  const transaction = db.transaction(['ventas'], 'readonly');
  const objectStore = transaction.objectStore('ventas');

  // Limpiar el cuerpo de la tabla HTML
  const tabla = document.getElementById('tblVentas').getElementsByTagName('tbody')[0];
  tabla.innerHTML = '';

  let totalAcumulado = 0;
  const request = objectStore.openCursor();

  request.onsuccess = function(event) {
      const cursor = event.target.result;
      if (cursor) {
          const row = cursor.value;
          const nuevaFila = tabla.insertRow();
          
          // Insertar celdas en la fila
          const celdaNumero = nuevaFila.insertCell(0);
          const celdaProducto = nuevaFila.insertCell(1);
          const celdaCantidad = nuevaFila.insertCell(2);
          const celdaSubtotal = nuevaFila.insertCell(3);
          const celdaIgv = nuevaFila.insertCell(4);
          const celdaTotal = nuevaFila.insertCell(5);

          // Asignar valores a las celdas
          celdaNumero.textContent = cursor.key;
          celdaProducto.textContent = row.producto;
          celdaCantidad.textContent = row.cantidad;
          celdaSubtotal.textContent = row.subtotal.toFixed(2);
          celdaIgv.textContent = row.igv.toFixed(2);
          celdaTotal.textContent = row.total.toFixed(2);

          // Asignar clases a las celdas
          celdaNumero.classList.add('center-align');
          celdaProducto.classList.add('left-align');
          celdaCantidad.classList.add('center-align');
          celdaSubtotal.classList.add('right-align');
          celdaIgv.classList.add('right-align');
          celdaTotal.classList.add('right-align');

          // Calcular el total acumulado
          totalAcumulado += row.total;

          // Continuar con el siguiente registro
          cursor.continue();
      } else {
          // No hay más registros, actualizar el total acumulado en el tfoot
          document.getElementById('totalAcumulado').textContent = totalAcumulado.toFixed(2);
      }
  };

  request.onerror = function(event) {
      console.error('Error al cargar los datos:', event.target.error);
  };
}
