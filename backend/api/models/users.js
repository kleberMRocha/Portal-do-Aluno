const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsTo(models.Estudantes, { foreignKey: 'userId' });
      Users.belongsTo(models.Docentes, { foreignKey: 'docentUserId' });
    }
  }

  Users.init({
    senha: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};