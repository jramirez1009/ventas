const vendedorModel = require('../models/vendedorModel');

const sucursalController = {
  getAllVendedors: (req, res) => {
    vendedorModel.getAllVendedors((error, results) => {
      if (error) {
        console.error('Error al obtener vendedor:', error);
        return res.status(500).json({ error: 'Error al obtener vendedores' });
      }
      res.json(results);
    });
  },

  searchVendedors: (req, res) => {
    const searchTerm = req.params.searchTerm;
    vendedorModel.searchVendedorsByName(searchTerm, (error, results) => {
      if (error) {
        console.error('Error al buscar vendedores:', error);
        return res.status(500).json({ error: 'Error al buscar vendedor' });
      }
      res.json(results);
    });
  },

  
};

module.exports = sucursalController;