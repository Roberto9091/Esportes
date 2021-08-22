const { Model, DataTypes }=require('sequelize')

class Questao extends Model {
    static init(sequelize){
        super.init({
            enunciado: DataTypes.STRING,
            opcao1: DataTypes.STRING,
            opcao2: DataTypes.STRING,
            opcao3: DataTypes.STRING,
            opcao4: DataTypes.STRING,
            nivel: DataTypes.STRING,
            idQTema: DataTypes.INTEGER
        },{sequelize,tableName:'questoes'})
    };
    static associate(models){
        //this.belongsTo(models.Categoria,{foreignKey:'idQCategoria', as:'categoria'})
        this.belongsTo(models.Tema,{foreignKey:'idQTema', as:'tema'})

        return Questao;
}
}

module.exports=Questao;