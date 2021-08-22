const express=require('express')
const routes=express.Router()
const temaController=require('../controller/temaController')

//list
routes.get('/',temaController.list)

//filtro
routes.post('/',temaController.filtro)

//abre add
routes.get('/add',temaController.abreadd)

//add
routes.post('/add',temaController.add)

//abre edit
routes.get('/edit/:id',temaController.abreedit)

//edit
routes.post('/edit/:id',temaController.edit)

//del
routes.get('/del/:id',temaController.del)

module.exports = routes