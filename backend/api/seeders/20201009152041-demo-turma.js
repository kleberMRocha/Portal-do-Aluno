module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Turmas', [
    {
      nome: '8°A',
      perletivoId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: '8°B',
      perletivoId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Turmas', null, {}),
};
