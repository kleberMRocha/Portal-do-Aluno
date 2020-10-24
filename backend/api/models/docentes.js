const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Docentes extends Model {
    static associate(models) {
      Docentes.hasMany(models.Diciplinas, { foreignKey: 'docenteId' });
      Docentes.hasOne(models.Users, { foreignKey: 'docentUserId' });
    }
  }
  Docentes.init({
    nome: DataTypes.STRING,
    foto: DataTypes.STRING,
    email: DataTypes.STRING,
    genero: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    Status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Docentes',
  });
  return Docentes;
};
