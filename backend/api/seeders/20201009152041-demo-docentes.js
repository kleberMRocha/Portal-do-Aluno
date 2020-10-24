module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Docentes', [
    {
      nome: 'Alice Slva',
      foto: 'https://static.diverseui.com/female-37.jpg',
      email: 'Alice@silva.com',
      genero: 'F',
      dataNascimento: '1980-12-30',
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nome: 'Orvaldo Rocha',
      foto: '',
      email: 'O7874@gamil.com',
      genero: 'M',
      dataNascimento: '2003-12-30',
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Docentes', null, {}),
};
