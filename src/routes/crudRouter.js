const { Router }= require("express");
const router = Router();

const {     listarDados, gravarDados, deletarDados, atualizarDados
} = require('../controlers/controle')

router.get('/listar', listarDados);

router.post('/gravar', gravarDados);

router.put('/atualizar/:id', atualizarDados);

router.delete('/deletar/:id', deletarDados);

module.exports = router;
