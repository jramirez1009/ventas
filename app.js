const express = require('express');
const app = express();

app.use(express.json());

// Importar controladores
const productController = require('./controllers/productController');
const clientController = require('./controllers/clientController');
const proveedorController = require('./controllers/proveedorController');
const sucursalController = require('./controllers/sucursalController');
const vendedorController = require('./controllers/vendedorController');
const ventaController = require('./controllers/ventaController');

// Rutas
app.get('/products', productController.getAllProducts);
app.get('/products/search/:searchTerm', productController.searchProducts);

app.get('/clients', clientController.getAllClients);
app.get('/clients/search/:searchTerm', clientController.searchClients);

app.get('/proveedor', proveedorController.getAllProveedors);
app.get('/proveedor/search/:searchTerm', proveedorController.searchProveedors);

app.get('/sucursal', sucursalController.getAllSucursals);
app.get('/sucursal/search/:searchTerm', sucursalController.searchSucursals);

app.get('/vendedor', vendedorController.getAllVendedors);
app.get('/vendedor/search/:searchTerm', vendedorController.searchVendedors);

app.get('/venta/search/:startDate/:endDate', ventaController.getDetallesVenta);
app.post('/venta', ventaController.createVenta);


// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});