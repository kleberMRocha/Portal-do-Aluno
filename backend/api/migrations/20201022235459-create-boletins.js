'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Boletins', {
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
      diciplinaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Diciplinas', key: 'id' },
      },
      nome: {
        type: Sequelize.STRING,
      },
      estapa_01_N1: {
        type: Sequelize.FLOAT,
      },
      estapa_01_N2: {
        type: Sequelize.FLOAT,
      },
      estapa_01_F1: {
        type: Sequelize.INTEGER,
      },
      estapa_01_F2: {
        type: Sequelize.INTEGER,
      },
      estapa_02_N1: {
        type: Sequelize.FLOAT,
      },
      estapa_02_N2: {
        type: Sequelize.FLOAT,
      },
      estapa_02_F1: {
        type: Sequelize.INTEGER,
      },
      estapa_02_F2: {
        type: Sequelize.INTEGER,
      },
      estapa_03_N1: {
        type: Sequelize.FLOAT,
      },
      estapa_03_N2: {
        type: Sequelize.FLOAT,
      },
      estapa_03_F1: {
        type: Sequelize.INTEGER,
      },
      estapa_03_F2: {
        type: Sequelize.INTEGER,
      },
      estapa_04_N1: {
        type: Sequelize.FLOAT,
      },
      estapa_04_N2: {
        type: Sequelize.FLOAT,
      },
      estapa_04_F1: {
        type: Sequelize.INTEGER,
      },
      estapa_04_F2: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Boletins');
  },
};
