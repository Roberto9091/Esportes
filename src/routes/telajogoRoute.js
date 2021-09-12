const express=require('express')
const routes=express.Router()
const telajogoController=require('../controller/telajogoController')


routes.get('/tabuleiro',telajogoController.abretabuleiro)

routes.post('/tabuleiro',telajogoController.tabuleiro)

routes.get('/questao',telajogoController.abrequestao)

routes.post('/questao',telajogoController.questao)

routes.post('/',telajogoController.filtro)

routes.get('/cadastrar-jogador',telajogoController.abrecadastrarjogador)

routes.post('/cadastrar-jogador',telajogoController.cadastrarjogador)

routes.get('/escolher-questao/:id',telajogoController.abreescolherquestao)

routes.post('/escolher-questao/:id',telajogoController.escolherquestao)

routes.get('/del/:id',telajogoController.del)

module.exports = routes