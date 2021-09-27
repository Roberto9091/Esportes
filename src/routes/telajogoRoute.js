const express=require('express')
const routes=express.Router()
const telajogoController=require('../controller/telajogoController')

routes.post('/',telajogoController.proxima)

routes.get('/cadastrar-jogador',telajogoController.abrecadastrarjogador)

routes.post('/cadastrar-jogador',telajogoController.cadastrarjogador)

routes.get('/tabuleiro',telajogoController.abretabuleiro)

routes.post('/tabuleiro',telajogoController.tabuleiro)


module.exports = routes