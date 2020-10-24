const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Estudantes extends Model {
    static associate(models) {
      Estudantes.hasMany(models.Matriculas, { foreignKey: 'estudanteId' });
      Estudantes.hasMany(models.Boletins, { foreignKey: 'estudanteId' });
      Estudantes.hasOne(models.Users, { foreignKey: 'userId' });
    }
  }
  Estudantes.init({
    nome: DataTypes.STRING,
    foto: DataTypes.STRING,
    email: DataTypes.STRING,
    genero: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    Status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Estudantes',
  });
  return Estudantes;
};
