const connection = require('../db');

const ventaModel = {
  
  createVenta: (ventaData, callback) => {    
    const ventaQuery = 'INSERT INTO venta (idventa,fecha, cliente_rutcliente, vendedores_rutvendedor, sucursal_idsucrusal) VALUES (?, ?, ?, ?, ?)';
    const fechaActual = new Date();
    const segundos = fechaActual.getSeconds();
    const rango = 999999 - 999 + 1;
    const idventa =  (Math.floor(Math.random() * rango) + 999) + segundos;
    const ventaValues = [
      idventa,
      ventaData.fecha,
      ventaData.cliente_rutcliente,
      ventaData.vendedor_rutvendedor,
      ventaData.sucursal_idsucrusal
    ];

    connection.query(ventaQuery, ventaValues, (error, result) => {
      if (error) {
        return callback(error, null);
      }

      // Obtener el ID de la venta recién insertada
     // const ventaId = result.insertId;
     const ventaId = idventa;

     // Insertar los detalles de la venta en la tabla detalleventa
      const detalles = ventaData.detalles;
      const detalleQuery = 'INSERT INTO detalleventa (iddetalleventa,cantidad, preciounitario, venta_idventa, producto_idproducto) VALUES (?, ?, ?, ?, ?)';
      
      detalles.forEach(detalle => {
        const detalleValues = [
          ventaId,
          detalle.cantidad,
          detalle.precioUnitario,
          ventaId, // Utilizamos el ID de la venta recién insertada
          detalle.producto_idproducto
        ];

        connection.query(detalleQuery, detalleValues, (error, result) => {
          if (error) {
            return callback(error, null);
          }
        });
      });

      callback(null, { ventaId });


    });
  },

  getVentasByDateRangeWithDetails: (startDate, endDate, callback) => {       
    const query = `
    SELECT v.idventa, v.fecha,
    ve.rutvendedor, ve.nombre as nombre_vendedor, ve.apellido as apellido_vendedor,
    c.rutcliente, c.nombre as nombre_cliente, c.apellidos as apellidos_cliente,
    s.idsucrusal, s.sucursal,
    dv.iddetalleventa, dv.cantidad, dv.preciounitario, dv.subtotal,
    p.idproducto, p.nombre as nombre_producto, p.precio as precio_producto
FROM venta v
JOIN vendedores ve ON v.vendedores_rutvendedor = ve.rutvendedor
JOIN cliente c ON v.cliente_rutcliente = c.rutcliente
JOIN sucursal s ON v.sucursal_idsucrusal = s.idsucrusal
JOIN detalleventa dv ON v.idventa = dv.venta_idventa
JOIN producto p ON dv.producto_idproducto = p.idproducto
      WHERE v.fecha BETWEEN ? AND ?
    `;
    connection.query(query, [startDate, endDate], callback);
  },

  searchVentaById: (idventa, callback) => {
    const query = 'SELECT * FROM venta WHERE idventa = ?';
     connection.query(query, [idventa], callback);
    //connection.query(query, [`%${proveedorId}%`], callback);
  },
};

module.exports = ventaModel;