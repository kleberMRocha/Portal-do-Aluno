module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Periodosletivos', [
    {
      nome: '2020',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: '2021',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Periodosletivos', null, {}),
};
