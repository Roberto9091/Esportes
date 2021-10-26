const Categoria=require('../model/Categoria')
const Tema=require('../model/Tema')
const Questao=require('../model/Questao')
const {Op, Association}=require('sequelize')
const Sequelize = require('sequelize')

module.exports={
    async proxima(req,res){
        const {idQTema}=req.body;
        const id = parseInt(idQTema);    
        
        const questoes = await Questao.findAll(
            { 
                where:{idQTema:id},
                limit: 1,
                order: [
                    Sequelize.literal('random()'),
                  ],
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

        return res.render('admin/telajogo/tabuleiro.ejs',{'Questoes':questoes,'msg':req.flash('msg')})
    },
    async abrecadastrarjogador(req,res){
        const categorias=await Categoria.findAll()
        const temas=await Tema.findAll( { 
            order:[['idCategoria']],
            include: {association: 'categoria'} 
        });
        
        
        res.render('admin/telajogo/cadastrar-jogador.ejs',{'Categorias':categorias,'Temas':temas,'msg':req.flash('msg')})
      
    },
    async cadastrarjogador(req,res){
        const {idQTema, nometema}=req.body;
        const id = parseInt(idQTema);    
        
        const questoes = await Questao.findAll(
            { 
                where:{idQTema:id},
                limit: 1,
                order: [
                    Sequelize.literal('random()'),
                  ],
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

        return res.render('admin/telajogo/tabuleiro.ejs',{'Questoes':questoes,'msg':req.flash('msg')})
        
    },
    async abretabuleiro(req,res){
        const id = req.params.id;

        const categorias=await Categoria.findAll()
        const temas=await Tema.findOne({where:{id:id}})
        const questoes=await Questao.findOne()

        res.render('admin/telajogo/tabuleiro.ejs',{'Categorias':categorias,'Temas':temas,'Questoes':questoes,'msg':req.flash('msg')})
    },
    async tabuleiro(req,res){
        const questoes = await Questao.findOne(
            { 
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

        res.render('admin/telajogo/questao2.ejs',{'Questoes':questoes,'msg':req.flash('msg')})
    },
    async abrequestao2(req,res){
        const id = req.params.id;

        const categorias=await Categoria.findAll()
        const temas=await Tema.findOne({where:{id:id}})
        const questoes=await Questao.findOne()

        res.render('admin/telajogo/tabuleiro.ejs',{'Categorias':categorias,'Temas':temas,'Questoes':questoes,'msg':req.flash('msg')})
    },
    async questao2(req,res){
        const questoes = await Questao.findOne(
            { 
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

        res.render('admin/telajogo/tabuleiro.ejs',{'Questoes':questoes,'msg':req.flash('msg')})
    },
}