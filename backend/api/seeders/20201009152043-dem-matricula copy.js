module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Matriculas', [
    {
      estudanteId: 1,
      turmaId: 1,
      status: 'ativa',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      estudanteId: 2,
      turmaId: 1,
      status: 'ativa',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      estudanteId: 1,
      turmaId: 1,
      status: 'ativa',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Matriculas', null, {}),
};
