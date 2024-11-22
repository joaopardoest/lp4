const veiculos = [];

exports.getVeiculos = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(veiculos));
};

exports.createVeiculo = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const veiculo = JSON.parse(body);
        veiculos.push(veiculo);
        res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(veiculo));
    });
};

exports.updateVeiculo = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const updatedVeiculo = JSON.parse(body);
        const index = veiculos.findIndex(v => v.id === updatedVeiculo.id);
        if (index >= 0) {
            veiculos[index] = updatedVeiculo;
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify(updatedVeiculo));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Veículo não encontrado!');
        }
    });
};

exports.deleteVeiculo = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const { id } = JSON.parse(body);
        const index = veiculos.findIndex(v => v.id === id);
        if (index >= 0) {
            veiculos.splice(index, 1);
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Veículo deletado com sucesso!');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Veículo não encontrado!');
        }
    });
};
