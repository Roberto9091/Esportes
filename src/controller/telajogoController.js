const Categoria=require('../model/Categoria')
const Tema=require('../model/Tema')
const Questao=require('../model/Questao')
const {Op, Association}=require('sequelize')
const Sequelize = require('sequelize')
const e = require('express')

module.exports={
    async abretelafinal(req,res){
        res.render('admin/telajogo/tela-final.ejs',{'msg':req.flash('msg')})
    },

    async telafinal(req,res){
        res.render('admin/telajogo/tela-final.ejs',{'msg':req.flash('msg')})
    },

    async abrecomojogar(req,res){
        res.render('admin/telajogo/como-jogar.ejs',{'msg':req.flash('msg')})
    },

    async comojogar(req,res){
        res.render('admin/telajogo/como-jogar.ejs',{'msg':req.flash('msg')})
    },
    async abretelainicial(req,res){
        res.render('admin/telajogo/tela-inicial.ejs',{'msg':req.flash('msg')})
    },
    async telainicial(req,res){
        res.render('admin/telajogo/cadastrar-jogador.ejs',{'msg':req.flash('msg')})
    },
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
        
        

        const {idQTema}=req.body;
        const nomejogador = req.body.nomejogador;
        const contador = req.body.contador;
        const pontuacao = req.body.pontuacao;
        const pontuacaoN = req.body.pontuacaoN;
        const tempojogo = req.body.tempojogo;
        const tempojogoM = req.body.tempojogoM;

        console.log(nomejogador);

        console.log(req.body)
        
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

        return res.render('admin/telajogo/tabuleiro.ejs',{'Questoes':questoes,'nomejogador':nomejogador,'contador':contador,'pontuacao':pontuacao,'tempojogo':tempojogo,'tempojogoM':tempojogoM,'pontuacaoN':pontuacaoN,'msg':req.flash('msg')})
        
    },
    async abretabuleiro(req,res){
        const id = req.params.id;
        const questaoNumero = req.params.questaoNumero;

        const categorias=await Categoria.findAll()
        const temas=await Tema.findOne({where:{id:id}})
        const questoes=await Questao.findOne()

        res.render('admin/telajogo/tabuleiro.ejs',{'Categorias':categorias,'Temas':temas,'Questoes':questoes,'questaoNumero':questaoNumero,'msg':req.flash('msg')})
    },
    async tabuleiro(req,res){
        const pontuacao = req.body.pontuacao;
        const pontuacaoN = req.body.pontuacaoN;
        const tempojogo = req.body.tempojogo;
        const tempojogoM = req.body.tempojogoM;
        const nomejogador = req.body.nomejogador;
        
        console.log(req.body)

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
        

        res.render('admin/telajogo/tabuleiro.ejs',{'Questoes':questoes,'pontuacao':pontuacao,'tempojogo':tempojogo,'tempojogoM':tempojogoM,'nomejogador':nomejogador,'pontuacaoN':pontuacaoN,'msg':req.flash('msg')})
    },
    async abretabuleiro2(req,res){
        const id = req.params.id;

        const categorias=await Categoria.findAll()
        const temas=await Tema.findOne({where:{id:id}})
        const questoes=await Questao.findOne()

        res.render('admin/telajogo/tabuleiro2.ejs',{'Categorias':categorias,'Temas':temas,'Questoes':questoes,'msg':req.flash('msg')})
    },
    async tabuleiro2(req,res){
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

        res.render('admin/telajogo/tabuleiro2.ejs',{'Questoes':questoes,'msg':req.flash('msg')})
    },
}