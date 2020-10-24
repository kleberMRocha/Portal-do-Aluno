module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Boletins', [
    {
      estudanteId: 1,
      diciplinaId: 1,
      nome: 'Notas e faltas 2020',
      estapa_01_N1: 8.5,
      estapa_01_N2: 6.5,
      estapa_01_F1: 2,
      estapa_01_F2: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      estudanteId: 2,
      diciplinaId: 2,
      nome: 'Notas e faltas 2020',
      estapa_01_N1: 8,
      estapa_01_N2: 7.5,
      estapa_01_F1: 0,
      estapa_01_F2: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Boletins', null, {}),
};
