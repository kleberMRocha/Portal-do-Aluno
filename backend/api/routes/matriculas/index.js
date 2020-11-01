const { Router } = require('express');
const matriculaController = require('../../Controller/matriculaController');

const router = Router();

router
  .get('/matricula/:id', matriculaController.getMatricula)
  .get('/matriculas/:id', matriculaController.getAllMatriculas);
module.exports = router;
