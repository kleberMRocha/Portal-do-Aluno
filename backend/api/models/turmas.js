'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    static associate(models) {
      Turmas.belongsTo(models.Periodosletivos, { foreignKey: 'perletivoId' });
      Turmas.hasMany(models.Diciplinas, { foreignKey: 'turmaId' });
      Turmas.hasMany(models.Matriculas, { foreignKey: 'turmaId' });
    }
  }

  Turmas.init({
    nome: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};
