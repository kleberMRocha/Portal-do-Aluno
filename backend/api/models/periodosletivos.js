const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Periodosletivos extends Model {
    static associate(models) {
      Periodosletivos.hasMany(models.Turmas, { foreignKey: 'perletivoId' });
    }
  }
  Periodosletivos.init({
    nome: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Periodosletivos',
  });
  return Periodosletivos;
};
