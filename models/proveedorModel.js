const connection = require('../db');

const proveedorModel = {
  getAllProveedors: (callback) => {
    const query = 'SELECT * FROM provedores';
    connection.query(query, callback);
  },

  searchProveedorsByName: (proveedorId, callback) => {
    const query = 'SELECT * FROM provedores WHERE rutproveedor LIKE ?';
    //connection.query(query, [proveedorId], callback);
    connection.query(query, [`%${proveedorId}%`], callback);
  },


};

module.exports = proveedorModel;