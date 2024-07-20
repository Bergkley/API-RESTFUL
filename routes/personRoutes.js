const router = require('express').Router();
const Person = require("./models/Person");

router.post('/', async(req, res) => {
    const { name, salary, approved } = req.body;
  
    if(!name){
      res.status(422).json({ message: 'O nome e obrigatorio!' });	
    }
  
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
  module.exports = router