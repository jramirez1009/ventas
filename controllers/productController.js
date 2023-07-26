const productModel = require('../models/productModel');

const productController = {
  getAllProducts: (req, res) => {
    productModel.getAllProducts((error, results) => {
      if (error) {
        console.error('Error al obtener productos:', error);
        return res.status(500).json({ error: 'Error al obtener productos' });
      }
      res.json(results);
    });
  },

  searchProducts: (req, res) => {
    const searchTerm = req.params.searchTerm;
    productModel.searchProductsByName(searchTerm, (error, results) => {
      if (error) {
        console.error('Error al buscar productos:', error);
        return res.status(500).json({ error: 'Error al buscar productos' });
      }
      res.json(results);
    });
  },

  // Agregar aquí más funciones de controlador para otros endpoints.
};

module.exports = productController;