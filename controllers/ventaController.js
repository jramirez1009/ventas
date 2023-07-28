const ventaModel = require('../models/ventaModel');

const ventaController = {
    getTotalVenta: (req, res) => {
        const idventa = req.params.idventa;
        ventaModel.searchVentaById(idventa, (error, results) => {
          if (error) {
            console.error('Error al buscar vendedores:', error);
            return res.status(500).json({ error: 'Error al buscar vendedor' });
          }
          res.json(results);
        });
    },
    getDetallesVenta: (req, res) => {
    const startDate = (req.params.startDate);
    const endDate = (req.params.endDate);  
    ventaModel.getVentasByDateRangeWithDetails(startDate,endDate, (error, results) => {
      if (error) {
        console.error('Error al traer la venta:', error);
        return res.status(500).json({ error: 'Error venta' });
      }
      results.forEach((venta) => {
        venta.fecha = formatDate(venta.fecha);
      });
      res.json(results);
    });
  },
  
  createVenta: (req, res) => {
    const ventaData = req.body;    
    ventaModel.createVenta(ventaData, (error, result) => {
      if (error) {
        console.error('Error al crear la venta:', error);
        return res.status(500).json({ error: 'Error al crear la venta' });
      }

      res.json({ message: 'Venta creada exitosamente.', ventaId: result.ventaId });
    });
  },
  
};

// Función para formatear la fecha en formato "aaaa-mm-dd"
function formatDate(fecha) {
    const fechaObjeto = new Date(fecha);
    const anio = fechaObjeto.getFullYear();
    const mes = fechaObjeto.getMonth() + 1;
    const dia = fechaObjeto.getDate();
    return `${anio}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
  }

module.exports = ventaController;