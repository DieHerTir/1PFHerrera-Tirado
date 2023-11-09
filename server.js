const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Reemplaza 'db.json' con el nombre de tu archivo de datos JSON.

// Habilitar CORS
server.use(cors());

// Rutas personalizadas, si es necesario
server.get('/custom', (req, res) => {
  res.json({ customData: 'Hello from custom route' });
});

server.use(router);

const port = 3000; // Puerto en el que se ejecutará JSON Server

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});