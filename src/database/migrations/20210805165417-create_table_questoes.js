'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('questoes', { 
      id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    enunciado:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    opcao1:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    opcao2:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    opcao3:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    opcao4:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    nivel:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    updatedAt:{
      type: Sequelize.STRING,
      allowNull: false,
    },
  idQTema: {
  type: Sequelize.INTEGER,
  allowNull: false,
  references: {
      model: 'temas',
      key: 'id'
  }
}
  });
   
},


  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('questoes');
  }
};
