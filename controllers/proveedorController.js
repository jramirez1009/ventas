const proveedorModel = require('../models/proveedorModel');

const proveedorController = {
  getAllProveedors: (req, res) => {
    proveedorModel.getAllProveedors((error, results) => {
      if (error) {
        console.error('Error al obtener productos:', error);
        return res.status(500).json({ error: 'Error al obtener proveedores' });
      }
      res.json(results);
    });
  },

  searchProveedors: (req, res) => {
    const searchTerm = req.params.searchTerm;
    proveedorModel.searchProveedorsByName(searchTerm, (error, results) => {
      if (error) {
        console.error('Error al buscar proveedor:', error);
        return res.status(500).json({ error: 'Error al buscar proveedor' });
      }
      res.json(results);
    });
  },

  
};

module.exports = proveedorController;