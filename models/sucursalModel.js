const connection = require('../db');

const sucursalModel = {
  getAllSucursals: (callback) => {
    const query = 'SELECT * FROM sucursal';
    connection.query(query, callback);
  },

  searchSucursalsByName: (proveedorId, callback) => {
    const query = 'SELECT * FROM sucursal WHERE sucursal LIKE ?';
    //connection.query(query, [proveedorId], callback);
    connection.query(query, [`%${proveedorId}%`], callback);
  },


};

module.exports = sucursalModel;