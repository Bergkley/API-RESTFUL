const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//rotas
app.get('/', (req, res) => {
    res.json({ message: 'API funcionando!' });
});



app.listen(3000, () => console.log('Server running on port 3000'));