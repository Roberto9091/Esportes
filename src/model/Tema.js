const { Model, DataTypes }=require('sequelize')

class Tema extends Model {
    static init(sequelize){
        super.init({
            nometema: DataTypes.STRING,
            idCategoria: DataTypes.INTEGER
        },{sequelize,tableName:'temas'})
    

        
        
     
    }

    static associate(models){
        this.belongsTo(models.Categoria,{foreignKey:'idCategoria', as:'categoria'})
  
     }
     
    
    /*Tema.associate = function(model) {
        Tema.belongsTo(model.Categoria, {
            through:'categorias',
            as: 'categoria',
            foreignKey: 'idCategoria' 
        });
      };*/
    
    
}
module.exports=Tema;