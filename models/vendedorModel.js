const connection = require('../db');

const vendedorModel = {
  getAllVendedors: (callback) => {
    const query = 'SELECT * FROM vendedores';
    connection.query(query, callback);
  },

  searchVendedorsByName: (vendedor, callback) => {
    const query = 'SELECT * FROM vendedores WHERE nombre LIKE ?';
    //connection.query(query, [proveedorId], callback);
    connection.query(query, [`%${vendedor}%`], callback);
  },


};

module.exports = vendedorModel;