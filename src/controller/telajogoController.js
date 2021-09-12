const Categoria=require('../model/Categoria')
const Tema=require('../model/Tema')
const Questao=require('../model/Questao')
const {Op, Association}=require('sequelize')
//const { abrecadastro, cadastro } = require('../../../Front-end/src/controller/telajogoController')

module.exports={
    async abretabuleiro(req,res){
        const categorias=await Categoria.findAll()
        const temas=await Tema.findAll()
        const questoes=await Questao.findAll()

        res.render('admin/telajogo/tabuleiro.ejs',{'Categorias':categorias,'Temas':temas,'Questoes':questoes,'msg':req.flash('msg')})
    },
    async tabuleiro(req,res){
        const categorias=await Categoria.findAll()
        const temas=await Tema.findAll()
        const questoes=await Questao.findAll()

        const id = req.params.id;
        
        var numeroquestoes = await Questao.findAll({where:{id}})
        console.log(numeroquestoes)
        res.render('admin/telajogo/questao.ejs',{'Categorias':categorias,'Temas':temas,'Questoes':questoes,'msg':req.flash('msg')})
    },

    async abrequestao(req, res){
        const id = req.params.id;
        var questao = parseInt(req.params.questao)
        const categorias=await Categoria.findAll()
        const temas=await Tema.findAll()
        const questoes=await Questao.findAll(
            { 
                order: Sequelize.literal('rand()'),
                limit: 1,
                include: [
                    {
                        model: Tema,
                        as: 'tema',
                        include: [
                            { model: Categoria, 
                            as: 'categoria' },
                        ]
                    }
                ]
            }
            
        )

        res.render('admin/telajogo/questao.ejs',{'Categorias':categorias,'Temas':temas,'Questoes':questoes,'questao':questao,'msg':req.flash('msg')})
    
    },
    async questao(req, res){

        const categorias=await Categoria.findAll()
        const temas=await Tema.findAll()

        var questao = parseInt(req.params.questao)

        const questoes=await Questao.findAll(
            { 
                order: Sequelize.literal('rand()'),
                limit: 1,
                include: [
                    {
                        model: Tema,
                        as: 'tema',
                        include: [
                            { model: Categoria, 
                            as: 'categoria' },
                        ]
                    }
                ]
            }
        
        )
        return res.render('/telajogo/tabuleiro/questao.ejs',{'Questoes':questoes,'questao':questao,'msg':req.flash('msg')})
    },
    async filtro(req, res){

    },
    async abrecadastrarjogador(req,res){
        const categorias=await Categoria.findAll()
        
        
        res.render('admin/telajogo/cadastrar-jogador.ejs',{'Categorias':categorias,'msg':req.flash('msg')})
      
    },
    async cadastrarjogador(req,res){
        const categorias=await Categoria.findAll()
        const temas=await Tema.findAll()

        res.render('admin/telajogo/escolher-questao.ejs',{'Categorias':categorias,'Temas':temas,'msg':req.flash('msg')})
        
    },
    async abreescolherquestao(req,res){
        const id = req.params.id;
        const categorias=await Categoria.findOne( {where: {id}})
        const temas=await Tema.findAll()
        res.render('admin/telajogo/escolher-questao.ejs',{'Categorias':categorias,'Temas':temas, 'msg':req.flash('msg')})  
    },
    async escolherquestao(req,res){
        const id = req.params.id;
        const nomecategoria = req.body.nomecategoria;

        const categorias=await Categoria.findAll()
        
        

        return res.render('admin/telajogo/tabuleiro.ejs',{'Categorias':categorias,'msg':req.flash('msg')})
    },
    async del(req,res){
        
        return res.render('admin/tema/list.ejs',{'msg':req.flash('msg')})
    }
}