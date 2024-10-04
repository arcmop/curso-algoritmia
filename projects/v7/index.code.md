```html
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registro de Ventas</title>
  <link href="https://fonts.cdnfonts.com/css/muli" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="css/main.css" rel="stylesheet" />
  <script src="js/main.js" defer></script>
</head>

<body>
  <main>
    <h2 class="card-header alert alert-primary">Registrar de Venta</h2>
    <form id="frmRegistro">
      <div>
        <label>Producto</label>
        <select id="cboProductos" name="cboProductos" class="custom-select">
        </select>
        </select>
      </div>
      <div>
        <label>Cantidad</label>
        <input type="text" name="txtCantidad" id="txtCantidad" class="form-control">
      </div>
      <div>
        <label>Color</label>
        <input type="radio" name="radioColor" value="Negro" class="form-check-input" />Negro
        <input type="radio" name="radioColor" value="Plateado"  class="form-check-input"/>Plateado
      </div>
      <div>
        <label>Boleta Electrónica</label>
        <input type="checkbox" name="checkBoleta" value="si" class="form-check-label" />
      </div>
      <div class="botones">
        <button id="btnLimpiar" type="reset" class="btn btn-secondary">
          <i class="fa-regular fa-file"></i>
          Limpiar
        </button>
        <button id="btnRegistrar" type="button" class="btn btn-primary">
          <i class="fa-regular fa-floppy-disk"></i>
          Registrar
        </button>
      </div>
    </form>
    <h2 class="card-header alert alert-primary">Registro de ventas Diario</h2>
    <table id="tblVentas" class="table">
      <thead>
        <tr>
          <th class="center-align" scope="col">#</th>
          <th class="center-align" scope="col">Fecha y Hora</th> <!-- Nueva columna para Fecha y Hora -->
          <th scope="col">Producto</th>
          <th class="center-align" scope="col">Color</th>
          <th class="center-align" scope="col">Boleta-E</th>
          <th class="center-align" scope="col">Cantidad</th>
          <th class="right-align" scope="col">Subtotal</th>
          <th class="right-align" scope="col">IGV</th>
          <th class="right-align" scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <!-- Las filas se agregarán dinámicamente aquí -->
      </tbody>
      <tfoot>
        <tr>
          <td colspan="8" style="text-align: right;">
            <strong>
              <i class="fa-solid fa-table-list"></i>
              Total Acumulado:
            </strong>
          </td>
          <td id="totalAcumulado" style="text-align: right;">0.00</td>
        </tr>
      </tfoot>
    </table>
  </main>
</body>

</html>
```