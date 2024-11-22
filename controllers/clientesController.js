const clientes = [];

exports.getClientes = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(clientes));
};

exports.createCliente = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const cliente = JSON.parse(body);
        clientes.push(cliente);
        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(cliente));
    });
};

exports.updateCliente = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const updatedCliente = JSON.parse(body);
        const index = clientes.findIndex(c => c.id === updatedCliente.id);
        if (index >= 0) {
            clientes[index] = updatedCliente;
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify(updatedCliente));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Cliente não encontrado!');
        }
    });
};

exports.deleteCliente = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const { id } = JSON.parse(body);
        const index = clientes.findIndex(c => c.id === id);
        if (index >= 0) {
            clientes.splice(index, 1);
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Cliente deletado com sucesso!');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Cliente não encontrado!');
        }
    });
};
