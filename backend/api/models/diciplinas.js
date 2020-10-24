const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Diciplinas extends Model {
    static associate(models) {
      Diciplinas.belongsTo(models.Turmas, { foreignKey: 'turmaId' });
      Diciplinas.belongsTo(models.Docentes, { foreignKey: 'docenteId' });
      Diciplinas.hasMany(models.Boletins, { foreignKey: 'diciplinaId' });
    }
  }
  Diciplinas.init({
    nome: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Diciplinas',
  });
  return Diciplinas;
};
