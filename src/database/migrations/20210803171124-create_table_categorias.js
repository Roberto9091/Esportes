'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.createTable('categorias', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nomecategoria:{
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
    });
     
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('categorias');
    
  }
};
