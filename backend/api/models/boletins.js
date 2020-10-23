'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Boletins extends Model {
    static associate(models) {
      Boletins.belongsTo(models.Estudantes, { foreignKey: 'estudanteId' });
      Boletins.belongsTo(models.Diciplinas, { foreignKey: 'diciplinaId' });
    }
  }

  Boletins.init({
    nome: DataTypes.STRING,
    estapa_01_N1: DataTypes.STRING,
    estapa_01_N2: DataTypes.STRING,
    estapa_01_F1: DataTypes.STRING,
    estapa_01_F2: DataTypes.STRING,
    estapa_02_N1: DataTypes.STRING,
    estapa_02_N2: DataTypes.STRING,
    estapa_02_F1: DataTypes.STRING,
    estapa_02_F2: DataTypes.STRING,
    estapa_03_N1: DataTypes.STRING,
    estapa_03_N2: DataTypes.STRING,
    estapa_03_F1: DataTypes.STRING,
    estapa_03_F2: DataTypes.STRING,
    estapa_04_N1: DataTypes.STRING,
    estapa_04_N2: DataTypes.STRING,
    estapa_04_F1: DataTypes.STRING,
    estapa_04_F2: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Boletins',
  });
  return Boletins;
};