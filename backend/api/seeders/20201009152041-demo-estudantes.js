module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Estudantes', [
    {
      nome: 'Ana Souza',
      foto: 'https://static.diverseui.com/180ef954-bbe4-4bef-bb2d-b23142433915-avatar.jpeg',
      email: 'ana@ana.com',
      genero: 'F',
      dataNascimento: '2001-12-30',
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Wallace Silva',
      foto: 'https://static.diverseui.com/male-19.jpg',
      email: 'silva@silva.com',
      genero: 'M',
      dataNascimento: '1975-10-10',
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Estudantes', null, {}),
};
