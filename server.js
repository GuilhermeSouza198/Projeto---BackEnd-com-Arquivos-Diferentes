const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4500;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/saibamais', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'saibamais.html'));
});

app.get('/imc', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'imc.html'));
});

app.get('/ppt', (req, res) => {
    res.download(path.join(__dirname, 'public', 'apresentacao.pptx'));
});

app.get('/json', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dados.json'));
});

app.get('/livro', (req, res) => {
    res.download(path.join(__dirname, 'public', 'livro.pdf'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
