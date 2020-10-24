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
    estapa_01_N1: DataTypes.FLOAT,
    estapa_01_N2: DataTypes.FLOAT,
    estapa_01_F1: DataTypes.INTEGER,
    estapa_01_F2: DataTypes.INTEGER,
    estapa_02_N1: DataTypes.FLOAT,
    estapa_02_N2: DataTypes.FLOAT,
    estapa_02_F1: DataTypes.INTEGER,
    estapa_02_F2: DataTypes.INTEGER,
    estapa_03_N1: DataTypes.FLOAT,
    estapa_03_N2: DataTypes.FLOAT,
    estapa_03_F1: DataTypes.INTEGER,
    estapa_03_F2: DataTypes.INTEGER,
    estapa_04_N1: DataTypes.FLOAT,
    estapa_04_N2: DataTypes.FLOAT,
    estapa_04_F1: DataTypes.INTEGER,
    estapa_04_F2: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Boletins',
  });
  return Boletins;
};
