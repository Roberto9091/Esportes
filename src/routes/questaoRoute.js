const express=require('express')
const routes=express.Router()
const questaoController=require('../controller/questaoController')

//list
routes.get('/',questaoController.list)

//filtro
routes.post('/',questaoController.filtro)

//abre add
routes.get('/add',questaoController.abreadd)

//add
routes.post('/add',questaoController.add)

//abre edit
routes.get('/edit/:id',questaoController.abreedit)

//edit
routes.post('/edit/:id',questaoController.edit)

//del
routes.get('/del/:id',questaoController.del)

module.exports = routes