const { Router } = require('express');
const estudantesController = require('../../Controller/estudantesController');

const router = Router();

router
  .get('/estudantes', estudantesController.getEstudantes)
  .get('/estudantes/:id', estudantesController.getUmEstudantes);
module.exports = router;
