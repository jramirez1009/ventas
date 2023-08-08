# ventas
api registro de ventas

#Para su funcionamiento 

1. Crear una base de datos en su entorno local
2. Importar el script.sql (solicitarlo) 
3. Abrir una terminal en la ruta donde se va a crear el proyecto
4. Dirigirse a github y clonar el repositorio (https://github.com/jramirez1009/ventas.git)
5. Arbir el proyecto con un editor (normalmente se usa visual studio code) desde la terminal usando "code ."
6. Cambiar la configuración de la base de datos según su entorno en el archivo db.js
7. Abrir un terminal desde visual studio code y ejecutar el comando "node app.js"
8. Abrir una herramienta tipo "Postman" para ejecutar las apis o una extension de visual para probar api como "Rest Client".  
9. Revisar documentación de como Listar los datos de Clientes, Vendedores, Proveedores, Sucursales, Productos. 
	Documetación uso api: https://documenter.getpostman.com/view/5936058/2s9XxsTvax	
	Los listados como son tipo GET se pueden ejecutar directamente en el navegador y se visualizará la información. 
	Un ejemplo seria "http://localhost:3000/proveedor" muestra un listado de proveedores
	
10.Para crear una venta: 

- Digitar fecha de la venta
- Hacer una consulta a los clientes "http://localhost:3000/clients"
- Escoger un rut Ej: 124, pertenece a Marcela Cantero
- Hacer una consulta a los vendedores "http://localhost:3000/vendedor"
- Escoger un rut Ej: 11126, pertenece a Diana Alvarez
- Hacer una consulta a las sucursales "http://localhost:3000/sucursal"
- Escoger un idsucursal Ej: 3, Chile
- Detalle de la venta:
- Hacer una consulta a los productos "http://localhost:3000/products"
- Escoger un idproducto Ej: 124, pertenece a un Mac
- Escoger otro idproducto Ej: 123, pertenece a un Iphone
- Digitar cantidad y precioUnitario de cada producto. 

Todo el detalle va en un formato JSON  como se ve en la documentación : https://documenter.getpostman.com/view/5936058/2s9XxsTvax	
Ejemplo:

{
  "fecha": "2023-06-18",
  "cliente_rutcliente": 124,
  "vendedor_rutvendedor": 11126,
  "sucursal_idsucrusal": 3,
  "detalles": [
    {
      "producto_idproducto": 124,
      "cantidad": 1,
      "precioUnitario": 9000000
    },
    {
      "producto_idproducto":  123,
      "cantidad": 1,
      "precioUnitario": 7500000
    }
  ]
}

Detalle de la venta:
Suiguiendo con el ejemplo, hago una consulta para ver el detalle de esa venta

http://localhost:3000/venta/search/2023-06-18/2023-06-18 

En este caso la consulta recibe fecha inicial y final, para este ejemplo se coloca la misma fecha en ambas ya que es la única de ese día ( a modo de ejemplo, ya que pueden ser más) 

Mostrará como resultado el detalle de la venta por producto vendido, de esa misma consulta se puede tomar el idventa y buscar el total en la tabla ventas o sumar los detalles. 

Si se desea ver el total con idventa se puede hacer la siguiente consulta:
http://localhost:3000/venta/id/687620

Por último en la carpeta "Buscar" dentro de la documentación (https://documenter.getpostman.com/view/5936058/2s9XxsTvax) se puede filtrar según el criterio establecido algunos datos que contenga parte o toda a información de un registro específico.
