# ventas
api registro de ventas

#Para su funcionamiento 
 -  Clonar git (https://github.com/jramirez1009/ventas.git)
     mas información ( https://github.com/jramirez1009/ventas )
#Cambiar las credenciales de base de datos en db.js según su localhost

#Copiar script de la BD enviar por correo e importar en su localhost

#PARA CREAR UNA VENTA

    1. Elegir una fecha
    2. Listar los clientes (Tomar el rut de un cliente) 
        Ej: 124
    3. Listar los vendedores (Tomar el rut de un vendedor) 
        Ej:11123
    4. Listar las sucursales (elegir una)    
        Ej:2
    5. LLenar la información del detalle
      Ej:
      "producto_idproducto": 124,
      "cantidad": 5,
      "precioUnitario": 1000    

      Esto se debe enviar en formato Json, ver Documentación. 

      https://documenter.getpostman.com/view/5936058/2s9XxsTvax#325814a8-43f8-452f-9fbb-d83878733d7c