const veiculosController = require('../controllers/veiculosController');

const veiculosRoutes = (req, res) => {
    if (req.method === 'GET') {
        veiculosController.getVeiculos(req, res);
    } else if (req.method === 'POST') {
        veiculosController.createVeiculo(req, res);
    } else if (req.method === 'PUT') {
        veiculosController.updateVeiculo(req, res);
    } else if (req.method === 'DELETE') {
        veiculosController.deleteVeiculo(req, res);
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Método não permitido!');
    }
};

module.exports = veiculosRoutes;
