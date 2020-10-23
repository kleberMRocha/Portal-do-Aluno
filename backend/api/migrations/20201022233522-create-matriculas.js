'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      estudanteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Estudantes', key: 'id' },
      },
      turmaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Turmas', key: 'id' },
      },
      status: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Matriculas');
  },
};
