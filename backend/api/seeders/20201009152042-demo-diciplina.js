module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Diciplinas', [
    {
      nome: 'Matemática',
      turmaId: 1,
      docenteId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'História',
      turmaId: 1,
      docenteId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Diciplinas', null, {}),
};
