const router = require('express').Router();
const Person = require("../models/Person");

// rotas criação
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
// rotas leitura
  router.get('/', async(req, res) => {
      try{
        const people = await Person.find();
        res.status(200).json(people);
      }catch(error){
          res.status(500).json({ message: error });
      }
  })

// rotas leitura
  router.get('/:id', async(req, res) => {
    const id = req.params.id;
  
    try {
      const person = await Person.findOne({ _id: id });
      if(!person){
        res.status(422).json({ message: 'Pessoa nao encontrada!' });
        return
      }
      res.status(200).json(person);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  })

  //Update
  router.patch('/:id', async(req, res) => {
    const id = req.params.id;
    const { name, salary, approved } = req.body;
  
    
  })


  module.exports = router