import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/:cep', async (req, res) => {
  const { cep } = req.params;

  console.log(`Buscando o CEP ${cep};`);

  if (cep.length < 8 || cep.length > 8) {
    console.log(`O CEP fornecido é menor ou maior que 8 caracteres;`);

    res.status(406).send({
      error: true,
      message: 'O CEP fornecido deve ter exatamente 8 caracteres',
    });
  } else {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const json = await response.json();
  
      if (!json.erro) {
        console.log(`CEP encontrado. Retornando informações;`);
    
        res.send({
          cep: json.cep,
          logradouro: json.logradouro,
          localidade: json.localidade,
          uf: json.uf,
        });
      } else {
        console.log(`O CEP fornecido é inválido;`);
  
        res.status(406).send({
          error: true,
          message: 'O CEP fornecido é inválido',
        });
      }
    } catch (err) {
      console.log(`Houve um erro ao buscar o CEP ${cep}: ${err.message};`);
  
      res.status(400).send({
        error: true,
        message: `Houve um problema ao buscar o CEP ${cep}`,
      });
    }
  }
  

});

export default app => app.use('/cep', router);