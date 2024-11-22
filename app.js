const http = require('http');
const clientesRoutes = require('./routes/clientesRoutes');
const veiculosRoutes = require('./routes/veiculosRoutes');

const hostname = '127.0.0.1';
const port = 8080;

// Servidor HTTP
const server = http.createServer((req, res) => {
    if (req.url.startsWith('/clientes')) {
        clientesRoutes(req, res);
    } else if (req.url.startsWith('/veiculos')) {
        veiculosRoutes(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Página não encontrada!');
    }
});

// Executar o servidor
server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
