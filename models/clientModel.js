const connection = require('../db');

const clientModel = {
    getAllClients: (callback) => {
      const query = 'SELECT * FROM cliente';
      connection.query(query, callback);
    },
  
    searchClientsByName: (searchTerm, callback) => {
      const query = 'SELECT * FROM cliente WHERE nombre LIKE ?';
      connection.query(query, [`%${searchTerm}%`], callback);
    },
  
   
  };
  
  module.exports = clientModel;