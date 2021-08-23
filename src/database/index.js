
const Sequelize=require('sequelize')
const config=require("../config/database")
const Categoria=require('../model/Categoria')
const Questao=require('../model/Questao')
const Tema=require('../model/Tema')
const conexao=new Sequelize(config);

//dotenv.config();

Categoria.init(conexao);
Questao.init(conexao);
Tema.init(conexao);

Categoria.associate(conexao.models);
Tema.associate(conexao.models)
Questao.associate(conexao.models)

module.exports=conexao;
