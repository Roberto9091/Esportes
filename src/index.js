require('dotenv').config();
const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const flash=require('req-flash')
const app=express();


var porta=process.env.PORT || 3000;
var session=require('express-session')
var categoriaRoute=require('./routes/categoriaRoute')
var questaoRoute=require('./routes/questaoRoute')
var temaRoute=require('./routes/temaRoute')
var telajogoRoute=require('./routes/telajogoRoute')

require('./database/index')

app.use(session({secret:'123',resave:true,saveUninitialized:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(flash())
app.use(express.static(path.join("src","public")))
app.use('/admin/categoria',categoriaRoute)
app.use('/admin/questao',questaoRoute)
app.use('/admin/tema',temaRoute)
app.use('/admin/telajogo',telajogoRoute)
//app.use('/caixa',caixaRoute)

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.listen(porta)
