const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../routes');

require('dotenv').config();

module.exports = (() => {
  const port = process.env.NODE_PORT;

  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  routes(app);
  app.listen(port, () => console.log(`servidor Rodando na porta ${port}`));

  return app;
});
