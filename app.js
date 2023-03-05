//IMPORTANDO VARIAVEIS PARA INICIAR O SERVIDOR HTTP
require('dotenv').config()
const express = require('express')
const http = require('http')
const cors = require('cors')

//IMPORTANDO VARIAVEIS DO ARQUIVO DE CONFIGURAÇÃO
const HOST = process.env.HOST
const PORT = process.env.PORT

//SCRIPT DE INICIO DE SERVIDOR
const app = express()
app.use(cors())

//RENDERIZA OS ARQUIVOS STATICOS
app.use('/', express.static('public'))

const httpServer = http.createServer(app)
httpServer.listen(PORT, HOST, () => {
    //PRINTA UMA MENSAGEM DE SUCESSO!
    console.log(`Servidor HTTP iniciado na url http://${HOST}:${PORT}`)
})

//EXPORTA O OBJETO APP COM O OBJETIVO DE SER USADO EM OUTROS ARQUIVOS
exports.app = app

//PARA FINALIZAR INICIA O SCRIPT manager.js
require('./api/manager')