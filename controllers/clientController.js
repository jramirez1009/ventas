const clientModel = require('../models/clientModel');

const clientController = {
  getAllClients: (req, res) => {
    clientModel.getAllClients((error, results) => {
      if (error) {
        console.error('Error al obtener productos:', error);
        return res.status(500).json({ error: 'Error al obtener productos' });
      }
      res.json(results);
    });
  },

  searchClients: (req, res) => {
    const searchTerm = req.params.searchTerm;
    clientModel.searchClientsByName(searchTerm, (error, results) => {
      if (error) {
        console.error('Error al buscar clientes:', error);
        return res.status(500).json({ error: 'Error al buscar clientes' });
      }
      res.json(results);
    });
  },

  
};

module.exports = clientController;