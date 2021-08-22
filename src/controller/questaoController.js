const Questoes=require('../model/Questao')
const Categoria=require('../model/Categoria')
const Tema=require('../model/Tema')
const {Op}=require('sequelize')

module.exports={
    async list(req,res){
        const questoes=await Questoes.findAll(
            { 
                //include: {association: 'categoria' },
                //include: {association: 'tema'},
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
        return res.render('admin/questao/list.ejs',{'Questoes':questoes,'msg':req.flash('msg')})
    },
    async filtro(req, res){
        let query='%'+req.body.filtro+'%'
        const questoes=await Questoes.findAll({
            where:{
                nome:{
                    [Op.like]:query
                }
            }
        })
        return res.render('admin/questao/list.ejs',{'Questoes':questoes,'msg':req.flash('msg')})
    },
    async abreadd(req,res){
        const categorias=await Categoria.findAll()
        const temas=await Tema.findAll( { 
            order:[['idCategoria']],
            include: {association: 'categoria'} 
        });
        //console.log(temas)
        const questoes=await Questoes.findAll()
        
        res.render('admin/questao/add.ejs',{'Categorias':categorias,'Temas':temas, 'Questoes':questoes,'msg':req.flash('msg')})
    },
    async add(req,res){
        const {enunciado,opcao1, opcao2, opcao3, opcao4, nivel, idQTema}=req.body;  
        await Questoes.create({enunciado,opcao1, opcao2, opcao3, opcao4, nivel, idQTema}).then(
            (questoes)=>{
            req.flash('msg','Questão foi adicinada com sucesso!')
            res.redirect('/admin/questao/add')
        }, (err)=>{
            console.log(err)
            req.flash('msg',"Problemas ao adicionar a Questão!")
            res.redirect('/admin/questao/add');
        });
        
        console.log(idQTema)
        console.log(enunciado)
        console.log(opcao1)
        console.log(opcao2)
        console.log(opcao3)
        console.log(opcao4)
        console.log(nivel)

        
    },
    async abreedit(req,res){
        const id = req.params.id;
        const questoes=await Questoes.findOne({where: {id}})
        const temas=await Tema.findAll()
        const categorias=await Categoria.findAll()
        res.render('admin/questao/edit.ejs',{'Questoes':questoes,'Categorias':categorias,'Temas':temas, 'msg':req.flash('msg')})
    },
    async edit(req,res){
        const id = req.params.id;
        const {enunciado, opcao1, opcao2, opcao3, opcao4, nivel} = req.body;

        const questoes = await Questoes.findByPk(id, enunciado, opcao1, opcao2, opcao3, opcao4, nivel);

        questoes.save();

        return res.render('admin/questao/add.ejs',{'Questoes':questoes,'msg':req.flash('msg')})
    },
    async del(req,res){
        const id = req.params.id;
        //const { nomecategoria } = req.body;

        const questoes = await Questoes.findOne(
            {where: {id} }
        );

        questoes.destroy();
        return res.render('admin/questao/add.ejs',{'Questoes':questoes,'msg':req.flash('msg')})
    }
}