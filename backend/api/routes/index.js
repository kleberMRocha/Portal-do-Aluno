const estudantes = require('./rotas_estudantes');

module.exports = (app) => {
  app.use(estudantes);
};
