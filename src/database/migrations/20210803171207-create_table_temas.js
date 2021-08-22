'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('temas', { 
      id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nometema:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt:{
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt:{
      type: Sequelize.DATE,
      allowNull: false,
    },
    idCategoria: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
          model: 'categorias',
          key: 'id'
      }
  }
  });
   
},


  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('temas');
  }
};
