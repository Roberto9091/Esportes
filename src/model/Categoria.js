const { Model, DataTypes }=require('sequelize')

class Categoria extends Model {
    static init(sequelize){
        super.init({
            nomecategoria: DataTypes.STRING,
        },{sequelize,tableName:'categorias'})
    
        
          };
         static associate(models){
            this.hasMany(models.Tema,{foreignKey:'idCategoria', as:'categoria'})
        
            return Categoria;
    }
    
}

module.exports=Categoria;