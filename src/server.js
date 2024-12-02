const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const bancoDeDados = [];

app.post('/api/usuarios', (req, res) => {
    const { nome, cpf, email, plano } = req.body;
    bancoDeDados.push({ nome, cpf, email, plano });
    res.status(201).send({ message: 'Usuário cadastrado com sucesso!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
