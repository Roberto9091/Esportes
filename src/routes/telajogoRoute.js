const express=require('express')
const routes=express.Router()
const telajogoController=require('../controller/telajogoController')

routes.post('/',telajogoController.proxima)

routes.get('/tela-final',telajogoController.abretelafinal)

routes.post('/tela-final',telajogoController.telafinal)

routes.get('/como-jogar',telajogoController.abrecomojogar)

routes.post('/como-jogar',telajogoController.comojogar)

routes.get('/tela-inicial',telajogoController.abretelainicial)

routes.post('/tela-inicial',telajogoController.telainicial)

routes.get('/cadastrar-jogador',telajogoController.abrecadastrarjogador)

routes.post('/cadastrar-jogador',telajogoController.cadastrarjogador)

routes.get('/tabuleiro',telajogoController.abretabuleiro)

routes.post('/tabuleiro',telajogoController.tabuleiro)

routes.get('/tabuleiro2',telajogoController.abretabuleiro2)

routes.post('/tabuleiro2',telajogoController.tabuleiro2)


module.exports = routes