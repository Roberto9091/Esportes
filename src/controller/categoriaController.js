const Categoria=require('../model/Categoria')
const {Op}=require('sequelize')

module.exports={
    async list(req,res){
        const categorias=await Categoria.findAll()
        return res.render('admin/categoria/list.ejs',{'Categorias':categorias,'msg':req.flash('msg')})
    },
    async filtro(req, res){
        let query='%'+req.body.filtro+'%'
        const categorias=await Categoria.findAll({
            where:{
                nomecategoria:{
                    [Op.like]:query
                }
            }
        })
        return res.render('admin/categoria/list.ejs',{'Categorias':categorias,'msg':req.flash('msg')})
    },
    async abreadd(req,res){
        const categorias=await Categoria.findAll()
        res.render('admin/categoria/add.ejs',{'Categorias':categorias,'msg':req.flash('msg')})
    },
    async add(req,res){
        const {nomecategoria}=req.body;
        await Categoria.create({nomecategoria}).then(
            (categoria)=>{
            req.flash('msg','Categoria foi adicinada com sucesso!')
            res.redirect('/admin/categoria/add')
        }, (err)=>{
            req.flash('msg',"Problemas ao adicionar Categoria!")
            res.redirect('/admin/categoria/add');
        });
        
    },
    async abreedit(req,res){
        const id = req.params.id;
        console.log(id, id)
        const categorias=await Categoria.findOne( {where: {id}})
        res.render('admin/categoria/edit.ejs',{'Categorias':categorias,'msg':req.flash('msg')})
    },
    async edit(req,res){
        const id = req.params.id;
        const nomecategoria = req.body.nome;
        console.log(id)
        await Categoria.update({nomecategoria},{ where: {id:id}});
        req.flash('msg', 'Categoria editada com sucesso!')
        const categorias = await Categoria.findAll()

        //await categorias.setAttributes('nomecategoria',nomecategoria)
        //console.log(categorias)
        //categorias.save();

        return res.render('admin/categoria/list.ejs',{'Categorias':categorias,'msg':req.flash('msg')})
    },
    async del(req,res){
        const id = req.params.id;
        //const { nomecategoria } = req.body;

        const categorias = await Categoria.findOne(
            {where: {id} }
        );

        categorias.destroy();
        return res.render('admin/categoria/add.ejs',{'Categorias':categorias,'msg':req.flash('msg')})
    }
}