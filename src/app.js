const express= require("express");
const app = express()

const dotenv = require('dotenv').config();
//setar a porta do servidor, a partir do arquivo .env
app.set('port', process.env.PORT);

//exportat as config do app para outros arquivos acessarem
module.exports = app;