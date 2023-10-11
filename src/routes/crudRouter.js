const { Router }= require("express");
const router = Router();

router.get('/api', (request, response) => (
    response.send('Retorno de lista de informações do bando de dados')
));

router.post('/api', (request, responde) =>(
    responde.send('Metodo utilizado para salvar informações'),
    console.log(request.body)
));

router.put('/api/:id', (request, responde) =>(
    responde.send('Metodo utilizado para editar informações'),
    console.log ("Lol: ", request.params.id)
));

router.delete('/api/:id', (request, responde) =>(
    responde.send('Metodo utilizado para deletar informações')
));

module.exports = router;
