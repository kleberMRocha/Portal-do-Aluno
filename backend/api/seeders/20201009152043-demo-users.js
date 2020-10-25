module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      userId: null,
      docentUserId: 1,
      senha: '$2b$10$dB/hN1T67/IrcjjZ.7tzeeWSbhR2aIdaGZTWWvPh/gZx55pr5488a',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: null,
      docentUserId: 2,
      senha: '$2b$10$dB/hN1T67/IrcjjZ.7tzeeWSbhR2aIdaGZTWWvPh/gZx55pr5488a',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 1,
      docentUserId: null,
      senha: '$2b$10$dB/hN1T67/IrcjjZ.7tzeeWSbhR2aIdaGZTWWvPh/gZx55pr5488a',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      docentUserId: null,
      senha: '$2b$10$dB/hN1T67/IrcjjZ.7tzeeWSbhR2aIdaGZTWWvPh/gZx55pr5488a',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
