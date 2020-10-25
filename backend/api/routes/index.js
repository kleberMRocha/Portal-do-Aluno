const login = require('./login');
const estudantes = require('./rotas_estudantes');
const loginController = require('../Controller/loginController');

module.exports = (app) => {
  app.use(login);
  app.use(loginController.authentication);
  app.use(estudantes);
};
