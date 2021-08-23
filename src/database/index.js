//require('dotenv').config();
const Sequelize=require('sequelize')
const config=require("../config/database")
const Categoria=require('../model/Categoria')
const Questao=require('../model/Questao')
const Tema=require('../model/Tema')
const conexao=new Sequelize(process.env.DATABASE_URL);

//dotenv.config();

Categoria.init(conexao);
Questao.init(conexao);
Tema.init(conexao);

Categoria.associate(conexao.models);
Tema.associate(conexao.models)
Questao.associate(conexao.models)

module.exports=conexao;
