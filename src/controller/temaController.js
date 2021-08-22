const Tema=require('../model/Tema')
const Categoria=require('../model/Categoria')
const {Op, Association}=require('sequelize')

module.exports={
    async list(req,res){
        const temas=await Tema.findAll( { 
            include: {association: 'categoria'} 
        });
        const categorias=await Categoria.findAll({
            attributes: ['nomecategoria'],
            where: {},
        })

        return res.render('admin/tema/list.ejs',{'Temas':temas, 'Categorias':categorias, 'msg':req.flash('msg')})
    },
    async filtro(req, res){
        let query='%'+req.body.filtro+'%'
        const temas=await Tema.findAll({
            where:{
                nometema:{
                    [Op.like]:query
                }
            }
        })
        return res.render('admin/tema/list.ejs',{'Temas':temas,'msg':req.flash('msg')})
    },
    async abreadd(req,res){
        const categorias=await Categoria.findAll()
        const temas=await Tema.findAll()
        
        res.render('admin/tema/add.ejs',{'Categorias':categorias,'Temas':temas,'msg':req.flash('msg')})
      
    },
    async add(req,res){
        const {nometema, idCategoria}=req.body;
        const id = parseInt(idCategoria);
        console.log(id);
        await Tema.create({nometema:nometema, idCategoria:id}).then(
            (temas)=>{
            req.flash('msg','Tema foi adicinada com sucesso!')
            res.redirect('/admin/tema/add')
        }, (err)=>{
            console.log(err);
            req.flash('msg',"Problemas ao adicionar Tema!")
            res.redirect('/admin/tema/add');
        });
        console.log(nometema)
       
       
        
    },
    async abreedit(req,res){
        const id = req.params.id;
        const temas=await Tema.findOne( {where: {id}})
        const categorias=await Categoria.findAll()
        res.render('admin/tema/edit.ejs',{'Categorias':categorias,'Temas':temas, 'msg':req.flash('msg')})
    },
    async edit(req,res){
        const id = req.params.id;
        const nometema = req.body.nometema;

        await Tema.update({nometema},{ where: {id:id}});

        req.flash('msg', 'Tema editado com sucesso!')
        const temas = await Tema.findAll( { 
            include: {association: 'categoria'} 
        })
        

        return res.render('admin/tema/list.ejs',{'Temas':temas,'msg':req.flash('msg')})
    },
    async del(req,res){
        const id = req.params.id;
        //const { nomecategoria } = req.body;

        const temas = await Tema.findOne(
            {where: {id} }
        );

        temas.destroy();
        return res.render('admin/tema/list.ejs',{'Temas':temas,'msg':req.flash('msg')})
    }
}




