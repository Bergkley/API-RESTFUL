const express = require("express");
const mongoose = require("mongoose");
const Person = require("./models/Person");

require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//rotas api
app.post('/person', async(req, res) => {
  const { name, salary, approved } = req.body;

  const person ={
    name,
    salary,
    approved
  }

  try {
    await Person.create(person);
    res.status(201).json({ message: 'Pessoa inserida com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: error });
  }

 
})

//rotas
app.get("/", (req, res) => {
  res.json({ message: "API funcionando!" });
});

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.sizyy70.mongodb.net/bancoapi?retryWrites=true&w=majority&appName=APICluster`
  )
  .then(() => {
    console.log("Conectado ao MongoDB");
    app.listen(process.env.PORT || 3000);
  });
