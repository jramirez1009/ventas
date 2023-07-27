const connection = require('../db');

const productModel = {
    getAllProducts: (callback) => {
      const query = 'SELECT * FROM producto';
      connection.query(query, callback);
    },
  
    searchProductsByName: (searchTerm, callback) => {
      const query = 'SELECT * FROM producto WHERE nombre LIKE ?';
      connection.query(query, [`%${searchTerm}%`], callback);
    },
  
    
  };
  
  module.exports = productModel;