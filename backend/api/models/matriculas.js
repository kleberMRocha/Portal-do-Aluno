'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    static associate(models) {
      Matriculas.belongsTo(models.Estudantes, { foreignKey: 'estudanteId' });
      Matriculas.belongsTo(models.Turmas, { foreignKey: 'turmaId' });
    }
  }

  Matriculas.init({
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Matriculas',
  });
  return Matriculas;
};