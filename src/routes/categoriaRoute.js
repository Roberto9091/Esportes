const express=require('express')
const routes=express.Router()
const categoriaController=require('../controller/categoriaController')

//list
routes.get('/',categoriaController.list)

//filtro
routes.post('/',categoriaController.filtro)

//abre add
routes.get('/add',categoriaController.abreadd)

//add
routes.post('/add',categoriaController.add)

//abre edit
routes.get('/edit/:id',categoriaController.abreedit)

//edit
routes.post('/edit/:id',categoriaController.edit)

//del
routes.get('/del/:id',categoriaController.del)

module.exports = routes