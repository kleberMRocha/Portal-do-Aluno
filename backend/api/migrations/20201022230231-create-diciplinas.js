'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Diciplinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      turmaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Turmas', key: 'id' },
      },
      docenteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Docentes', key: 'id' },
      },
      nome: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Diciplinas');
  }
};