const express = require('express');
const db = require('./dbConfig');

const app = express();
const PORT = 3000;

// Ruta para obtener todas las ventas
app.get('/ventas', (req, res) => {
  const query = 'SELECT * FROM venta';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener las ventas:', err);
      res.status(500).json({ error: 'Error al obtener las ventas' });
    } else {
      res.json(results);
    }
  });
});

// Ruta para obtener detalles de una venta específica
app.get('/ventas/:idVenta', (req, res) => {
  const idVenta = req.params.idVenta;
  const query = 'SELECT * FROM venta WHERE idventa = ?';
  db.query(query, [idVenta], (err, results) => {
    if (err) {
      console.error('Error al obtener la venta:', err);
      res.status(500).json({ error: 'Error al obtener la venta' });
    } else {
      res.json(results[0]);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor API en ejecución en http://localhost:${PORT}`);
});