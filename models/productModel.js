const connection = require('../db');

const productModel = {
    getAllProducts: (callback) => {
      const query = 'SELECT * FROM provedores';
      connection.query(query, callback);
    },
  
    searchProductsByName: (searchTerm, callback) => {
      const query = 'SELECT * FROM provedores WHERE nombre LIKE ?';
      connection.query(query, [`%${searchTerm}%`], callback);
    },
  
    
  };
  
  module.exports = productModel;