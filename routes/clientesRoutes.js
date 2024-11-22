const clientesController = require('../controllers/clientesController');

const clientesRoutes = (req, res) => {
    if (req.method === 'GET') {
        clientesController.getClientes(req, res);
    } else if (req.method === 'POST') {
        clientesController.createCliente(req, res);
    } else if (req.method === 'PUT') {
        clientesController.updateCliente(req, res);
    } else if (req.method === 'DELETE') {
        clientesController.deleteCliente(req, res);
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Método não permitido!');
    }
};

module.exports = clientesRoutes;
