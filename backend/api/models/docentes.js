'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Docentes extends Model {
    static associate(models) {
      Docentes.hasMany(models.Diciplinas, { foreignKey: 'docenteId' });
    }
  }
  Docentes.init({
    nome: DataTypes.STRING,
    foto: DataTypes.STRING,
    genero: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Docentes',
  });
  return Docentes;
};
