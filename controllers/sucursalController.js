const sucursalModel = require('../models/sucursalModel');

const sucursalController = {
  getAllSucursals: (req, res) => {
    sucursalModel.getAllSucursals((error, results) => {
      if (error) {
        console.error('Error al obtener productos:', error);
        return res.status(500).json({ error: 'Error al obtener proveedores' });
      }
      res.json(results);
    });
  },

  searchSucursals: (req, res) => {
    const searchTerm = req.params.searchTerm;
    sucursalModel.searchSucursalsByName(searchTerm, (error, results) => {
      if (error) {
        console.error('Error al buscar sucursal:', error);
        return res.status(500).json({ error: 'Error al buscar sucursal' });
      }
      res.json(results);
    });
  },

  
};

module.exports = sucursalController;